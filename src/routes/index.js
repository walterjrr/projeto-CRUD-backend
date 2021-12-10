const router = require('express').Router()
const CustomersController = require('../Controllers/customers')

router.get('/',(req, res) => {
    res.render('index', {
        title: 'titulo Teste'
    })
})

router.get('/register',(req, res) => {
    res.render('register', {
        title: 'cadastro de clientes'
    })
})

router.post('/register/add', CustomersController.add)

module.exports = router