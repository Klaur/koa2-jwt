const jsonwebtoken = require('jsonwebtoken')
const { secret } = require('../configs/db')
const Users = require('../models/users')
module.exports = {
  async login(ctx, next) {
    ctx.verifyParams({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true }
    })
    console.log(ctx.request.body)
    const user = await Users.findOne(ctx.request.body)
    if (user) {
      const { _id, username } = user
      const token = jsonwebtoken.sign({ _id, username }, secret, { expiresIn: '1d' })
      ctx.body = {
        status: 200,
        data: token,
        message: '登录成功！'
      }
    } else {
      ctx.throw(401, '用户名或密码不正确')
    }
  },
  async logout(ctx, next) {
    ctx.body = {
      status: 200,
      body: true,
      message: '退出成功'
    }
  },
  async checkUserExist(ctx, next) {
    const user = await Users.findById(ctx.params.id)
    if (!user) {
      ctx.throw(404, '用户不存在')
    }
    await next()
  },
  async getUserInfo(ctx, next) {
    ctx.body = {
      status: 200,
      data: {
        userInfo: ctx.state //当前token存储的数据
      },
      message: ''
    }
  }
}
