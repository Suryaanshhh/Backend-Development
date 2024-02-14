const fs = require('fs');
const requestHandler = (req, res) => {
    const url=req.url
    const method=req.method
    if (url === '/form') {
        fs.readFile('message.txt', 'utf-8', (error, data) => {
            res.setHeader('Content-type', 'text/html')
            res.write('<html>')
            res.write('<head>')
            res.write(`<body>${data}</body>`)
            res.write('<body>')
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form>')
            res.write('</body>')
            res.write('</head>')
            res.write('</html>')
            res.end();
        })

    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, (Error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/form')
                res.end();
            })
        })

    }
}

module.exports={
    handler:requestHandler,
    text:'This is some text'
}