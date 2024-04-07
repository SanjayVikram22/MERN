import http from 'http';
import url from 'url';


const server = http.createServer((req,res)=>{
    const parseurl =url.parse(req.url,true);
    if(parseurl.pathname === "/" && req.method === "GET")
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.end("<h1>web server creation successfull<h1/>");
    }
    else if (parseurl.pathname === "/about" && req.method === "GET")
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.end("<h1>about us<h1/>");
    }
    else {
        res.writeHead(404,{'content-type':'text/html'});
        res.end("<h1>page not found<h1/>");

    }
});

server.listen(5000,()=>{
    console.log("http://localhost:5000");
})

