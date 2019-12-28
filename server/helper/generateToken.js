const jwt = require('jsonwebtoken')

module.exports = (userInfo) => {
  const token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '1h' })
  return token
}