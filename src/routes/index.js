const router = require('express').Router()

router.get('/',(req, res) => {
    res.render('index', {
        title: 'titulo Teste'
    })
})

module.exports = router