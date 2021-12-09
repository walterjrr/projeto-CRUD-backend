const mongoose = require('mongoose')

const register = new Model({
    name: 'walter',
    age: 35,
    email: 'jrwalter731@gmail.com',
    password: '12345',
})

register.save()

module.exports = Model