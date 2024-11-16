const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    const url = req.url;
    if(url === "/about"){
        fs.readFile("views/about.html", function(err, data){

            res.writeHead(200, {"Content-type": "text/html"});
            res.write(data);
            res.end();
        });
    
    }else if(url === "/contact"){
        fs.readFile("views/contact.html", function(err, data){

            res.writeHead(200, {"Content-type": "text/html"});
            res.write(data);
            res.end();
        });
    
    }else{
        fs.readFile("views/index.html", function(err, data){

            res.writeHead(200, {"Content-type": "text/html"});
            res.write(data);
            res.end();
        });
    
    }
    

}).listen(8080);