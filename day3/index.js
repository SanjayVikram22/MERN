//var generateName = require('sillyname');
//var sillyName = generateName();
//console.log(sillyName);    
//const { error } = require('console');

const fstream =require("fs");
fstream.writeFile("file.txt","hi",(error)=>{
    if (error) throw error;
    console.log("file success");
})

fstream.readFile("file.txt","utf-8",(error,data)=>{
    if (error){
       throw error;
    }
    console.log(data);


})