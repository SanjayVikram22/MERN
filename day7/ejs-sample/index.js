const express =require('express')
const app=express()

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('welcome',{name:"sanjay"});
})

app.listen(5000,function(req,res){
    console.log("http:localhost/5000");
})