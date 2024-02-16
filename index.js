const express=require('express')
var mongoClient = require("mongodb").MongoClient;
var abhi=require('./DB/SQL')
var session = require('express-session')
const app=express()
const port=4000

abhi()

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.get('/', function(req, res, next) {
    if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + req.session.views + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else {
      req.session.views = 1
      res.end('welcome to the session demo. refresh!')
    }
  })
app.listen(port,()=>{
    console.log("server is runnig at port:"+port)
    
})