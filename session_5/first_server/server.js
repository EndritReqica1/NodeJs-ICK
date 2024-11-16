const http = require("http");




//call back function argumentio qe kena me ja jap
//array function
http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method); Get

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello World!</h1>");
    res.end();
}).listen(8000);
//chaining method