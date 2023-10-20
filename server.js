const express = require('express')
const app = express()
const express_flash = require('express-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.use(express_flash())
app.use(cookieParser("hderapido"))
app.use(session({
    secret:'php',
    saveUninitialized: true,
    cookie:{maxAge: 6000}
}))
app.listen(8,()=>{
    console.log('server is running')
})
module.exports = app