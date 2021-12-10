function index(req, res){
    res.render('index', {
        title: 'titulo teste'
    })
}

module.exports = {
    index,
}