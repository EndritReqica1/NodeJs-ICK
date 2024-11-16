const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    const url = req.url;
    res.writeHead(200, {"Content-type": "text/html"});
    function Data(err, data){

           
        res.write(data);
        res.end();
    }
    if(url === "/about"){
        fs.readFile("views/about.html",data );
    
    }else if(url === "/contact"){
        fs.readFile("views/contact.html", data);
    
    }else{
        fs.readFile("views/index.html", data);
    
    }
    

}).listen(8080);

//