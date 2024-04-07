 import express from "express";
 const app=express();

 app.get('/',(req,res)=>{
     res.send('hi');
 })

 app.use((req,res)=>{
     res.status(404).send("page not available")
 })

 app.listen(5000,()=>{
     console.log("express server http://localhost:5000")
 })


