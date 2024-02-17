const express=require('express')

var abhi=require('./SQL')
var session = require('express-session')
const app=express()
const port=process.env.port || 4000

abhi()

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.get('/', (req, res) => { 
  res.send('Hello, Azure! This is a Node.js application.'); 
}); 
  
app.listen(port, () => { 
  console.log(`Server is running on port ${port}`); 
}); 

