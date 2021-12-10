const CustomersModel = require('../models/customers')

function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const register = new CustomersModel({
        name, age,
        email, password
    })

    register.send('cadastro realizado')
    
    req.end
}

module.exports = {
    add
}