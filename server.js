const express = require('express');
const path = require('path');
const bodyparsar = require("body-parser");
const sessionc =require("express-session");
const session = require('express-session');
const{v4:uuidv4} = require("uuid");
const router = require('./router');

const app = express();

const port = process.env.PORT ||3000;

app.use(bodyparsar.json())
app.use(bodyparsar.urlencoded({extended:true}))

app.set('view engine','ejs');

// load static assests
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route', router);

//HOME ROUTE

app.get('/',(req,res) =>{
res.render('base',{title:"Login System"});
})

app.listen(port,()=>{console.log("Lostening to the server on http://localhost:3000")});