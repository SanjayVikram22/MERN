const express =require('express')
const app=express();

const path =require('path');

console.log(__dirname);

app.use(express.static(path.join(__dirname,'port')));
const pa=path.join(__dirname,'public');

app.get('/',(req,res)=>{
    res.sendFile(path.join(pa,'index.html'));
});

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})
