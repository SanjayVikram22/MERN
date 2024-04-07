const express =require('express')
const app=express();

const path =require('path');

console.log(__dirname);

app.use(express.static(path.join(__dirname,'public')));
const pa=path.join(__dirname,'public');

app.get('/',(req,res)=>{
    res.sendFile(path.join(pa,'index.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(pa,'contact.html'));
});

app.use((req,res)=>{
    res.status(404).send("page not available")
})

app.listen(5000,()=>{
    console.log("http://localhost:5000");
})