const CustomersModel = require('../models/customers')
const express = require('express')
const {crypto} = require('../utils/passwords')

function index(req, res){
    res.render('register', {
        title: 'cadastro de clientes'
    })
}

async function add(req, res){
    const{
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCripto = await crypto(password)
    

    const register = new CustomersModel({
        name,
        age, 
        email, 
        password: passwordCripto, 
    })

    register.save() 
    res.send('cadstro realizado')
}

module.exports = {
    add, 
    index,
}