const { Schema, model } = require('mongoose')

const tokenSchema = new Schema({
  _userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600 // in Second
  }
})

module.exports = model('Token', tokenSchema)
