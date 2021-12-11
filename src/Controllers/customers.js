const CustomersModel = require('../models/customers')
const express = require('express')
const {crypto} = require('../utils/passwords')

const padraoTitle = 'cadastro de clientes'

function index(req, res){
    res.render('register', {
        title: padraoTitle
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
    res.render('register', {
        title: padraoTitle,
        message: 'cadastro realizado com sucesso'
    })
}

async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'list of clients',
        users,
    })
}

async function Indexedit(req, res) {
    const {id} = req.query

    const users = await CustomersModel.findById(id)

    res.render('editUsers', {
        title: 'Editar usuarios',
        users,
    })
}

async function postedit(req, res) {
    const{
        name,
        age,
        email,
    } = req.body

    const {id} = req.params

    const users = await CustomersModel.findById(id)

    users.name = name
    users.age = age
    users.email = email

    users.save()

    res.render('editUsers', {
        title: 'editar',
        users,
        message: 'atualizado com sucesso'
    })

}

async function remove(req, res) {
    const {id} = req.params

    const remove = await CustomersModel.deleteOne({_id: id})

    if (remove.ok) {
        res.redirect('/list')
    }
}

module.exports = {
    add, 
    index,
    listUsers,
    Indexedit,
    postedit,
    remove,
}