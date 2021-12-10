const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//MVC model view controller

const Model = mongoose.model('customers', Schema)


module.exports = Model