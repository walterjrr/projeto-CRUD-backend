const express = require('express')
const path = require('path')

const db = require('./database')
const router = require('./routes')
const mongoose = require('mongoose')

const app = express()

//conexao com o banco de dados
db.connect()

const Schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//MVC model view controller

const Model = mongoose.model('customers', Schema)



//definindo os template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({extended: true}))


//404 Error(not found)
app.use((req, res) => {
    res.send('pagina nao encontrada!')
})

app.use('/', router)

//executando o servidor 
const port = process.env.PORT || 8080

app.listen(port,() =>{
 console.log(`server is listening on port ${port} 😎`)
})