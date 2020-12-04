const mongoose = require('mongoose')
module.exports = {
  secret: 'dsad8d8a9d8a-jwt-secrect',
  init() {
    mongoose.connect('mongodb://klaur:lele513613@localhost:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function () {
      console.log('数据库blog连接成功！')
    })
  }
}
