const CustomersModel = require('../models/customers')
const express = require('express')

function add(req, res){
    const{
        name,
        age,
        email,
        password,
    } = req.body
    

    const register = new CustomersModel({
        name,
        age, 
        email, 
        password, 
    })

    register.save() 
    res.send('cadstro realizado')
}

module.exports = {
    add
}