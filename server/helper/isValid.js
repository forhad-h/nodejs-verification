const validator = require('validator')

module.exports = (email = '', password = '') => !validator.isEmpty(email) && validator.isEmail(email) && !validator.isEmpty(password)