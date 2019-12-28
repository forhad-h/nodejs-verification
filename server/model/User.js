const { Schema, model } = require('mongoose')
const crypto = require('crypto')

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  isVerified: { type: String, default: false },
  hash: String,
  salt: String,
  passwordResetToken: String,
  passwordResetExpires: Date
}, {
  timestamps: true
})

userSchema.methods.setPassword = function (password) {

  // create unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex')

  // Hashing password with salt, 1000 iterations, 64 length and sha512 digest 
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
}

userSchema.methods.validPassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
  return this.hash === hash
}

module.exports = model('User', userSchema)
