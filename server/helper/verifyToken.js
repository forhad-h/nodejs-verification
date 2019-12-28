const jwt = require('jsonwebtoken')

module.exports = (req) => {
  //FIXME: Test it
  const token = req.headers.authorization.split(' ')[1]
  return jwt.verify(token, process.env.JWT_SECRET)
}