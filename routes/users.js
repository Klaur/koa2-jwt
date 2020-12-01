const router = require('koa-router')()
const auth = require('../middlewares/jwt.js')
const { getUserInfo, login, logout } = require('../controllers/users')
router.prefix('/users')

router.post('/login', login)

router.post('/logout', logout)

router.get('/user-info', auth, getUserInfo)

module.exports = router
