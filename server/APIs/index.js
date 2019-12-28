const router = require('express').Router()
const crypto = require('crypto')
const nodemailer = require('nodemailer')

const generateToken = require('../helper/generateToken')
const isValid = require('../helper/isValid')
const User = require('../model/User')
const Token = require('../model/Token')


// Base point
router.get('', (req, res) => {
  res.send('Server Running!')
})

// For Signup
router.post('/signup', (req, res) => {

  // validation
  if (!isValid()) return res.status(400).json({
    message: "User creation failed"
  })

  User.findOne({ email: email })
    .exec()
    .then(user => {
      if (user) return res.status(409).json({
        message: "Email Already exists!"
      })

      // make an object of User model
      const userObj = new User()

      // initialize user object with request body data
      userObj.name = req.body.name
      userObj.email = req.body.email
      userObj.setPassword(req.body.password)

      // save user into database
      userObj.save((err, user) => {
        if (err) {
          return res.status(400).send({
            message: "Failed to add user"
          })
        }

        // initialize token model object
        const token = new Token({
          _userId: user._id,
          token: crypto.randomBytes(16).toString('hex')
        })

        // save token into database
        token.save().then(({ token }) => {

          // transporter server configuration
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_USERNAME,
              pass: process.env.GMAIL_PASS
            }
          })

          // mail options
          const mailOptions = {
            from: `no-reply@${process.env.GMAIL_USERNAME}`,
            to: user.email,
            subject: 'Account Verification Token',
            text: `Hell,\n\n Please verify your account by clicking the link: \nhttp://${req.headers.host}/confirmation/${token}`
          }

          // send verification email
          transporter.sendMail(mailOptions, (err) => {
            if (err) res.status(500).json({
              message: err.message
            })
            res.status(200).json(`A verification mail has been sent to ${user.email}`)
          })

        }).catch(err => res.status(500).json({ message: err.message }))


      })
    })
    .catch(err => res.status(500).json({
      message: err.message
    }))


})


// For Login
router.post('/signin', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // validation
  if (!isValid()) return res.status(400).json({
    message: "Auth Failed"
  })

  // check if user exists with provided email address
  User.findOne({ email: email })
    .exec()
    .then(user => {

      // check if the password is match
      if (user.validPassword(password)) {

        if (!user.isValid) return res.status(401).json({
          message: "Account has not been verified"
        })

        const userInfo = { id: user._id, email: user.email }

        // response user info with token
        res.status(201).json({
          ...userInfo,
          token: generateToken(userInfo)
        })

      } else {
        // failed authorization
        res.status(401).json({
          message: "Auth Failed"
        })
      }
    })
    .catch(err => res.status(500).json({
      message: err.message
    }))
})

// For token confirmation
router.post('/confirmation', (req, res) => {

})

// Resend a new confirmation token
router.post('/resend', (req, res) => {

})

module.exports = router