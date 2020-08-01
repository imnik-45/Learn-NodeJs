const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
 
console.log(req.url, req.method); //code runing in server not on browser so it will not available on browser console

  // setting header content type
  res.setHeader("Content-type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode=200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode=200;
      break;

    case "/about-me":
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
        break;

    default:
      path += "404.html";
      res.statusCode=404;
      break;
  }

  /* 
    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<h1>Node JS</h1>')
    res.write("<p>hello Javascript</p>");
    res.end();
  */

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

/*
Status Codes

1. 100- informational responses
2. 200- success codes
3. 300- codes for redirect
4. 400- user or client error codes
5. 500- server error codes

*/

// localhost is like a domain name on the web.
//port number are like door into a computer.

server.listen(3000, "localhost", () => {
  console.log("listening at 3000");
});


