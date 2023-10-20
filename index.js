const app = require('./server')


app.get('/',(req,res)=>{
    var msg = req.flash('msg-sucess')

    res.render('index.ejs',{msg})
})

app.post('/',(req,res)=>{
    req.flash('msg-sucess','erro qualquer tente amnah')
    res.redirect('/',)
})