const http = require('http');

const server = http.createServer((req, res) => {
    const url=req.url
    if(url==='/home'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</head>')
        res.write('</html>')
    }
    if(url==='/about'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</head>')
        res.write('</html>')
    }
    if(url==='/node'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</head>')
        res.write('</html>')
    }
});

server.listen(4000);