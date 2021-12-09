const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

//conexao com o banco de dados
db.connect()

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//MVC model view controller

const Model = mongoose.model('customers', schema)



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

app.use('/', routes)

//executando o servidor 
const port = process.env.PORT || 8080

app.listen(port,() =>{
 console.log(`server is listening on port ${port} 😎`)
})