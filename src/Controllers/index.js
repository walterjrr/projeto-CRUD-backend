function index(req, res){
    res.render('index', {
        title: 'home'
    })
}

module.exports = {
    index,
}