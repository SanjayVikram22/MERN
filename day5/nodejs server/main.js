import http from "http";
import url from "url";

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify({
        data:"Hello world"
    }));
});


server.listen(5000,()=>{
    console.log("server is running in http://localhost:5000");
})

