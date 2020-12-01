const jwt = require('koa-jwt')
const { secret } = require('../configs/db')
const auth = jwt({ secret })
module.exports = auth
