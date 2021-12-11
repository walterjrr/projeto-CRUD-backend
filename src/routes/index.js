const router = require('express').Router()

const CustomersController = require('../Controllers/customers')
const indexController = require('../Controllers/index')

//routes
router.get('/', indexController.index)

//register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// Listar
router.get('/list', CustomersController.listUsers)

//editar
router.get('/edit', CustomersController.Indexedit)
router.post('/edit/:id', CustomersController.postedit)

//remover
router.get('/remove/:id', CustomersController.remove)

module.exports = router