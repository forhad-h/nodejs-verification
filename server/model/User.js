const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  isVerified: { type: String, default: false },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date
}, {
  timestamps: true
})

module.exports = model('User', userSchema)
