const router = require('express').Router()
const CustomersController = require('../Controllers/customers')
const indexController = require('../Controllers/index')

router.get('/', indexController.index)


router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

module.exports = router