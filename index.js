const http = require('http')
const fs = require('fs/promises');
const url = require('node:url');

function servePage(err, data) {
    if (err) {
        getErrorPage()
        res.write
    }
}


http.createServer( async function (req, res) {
    const myURL = new URL(req.url, "http://localhost:8080/");
    const filename = "." + myURL.pathname + ".html"
    

    try {
        const content = await fs.readFile(filename)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(content)

    } catch(err) {
        const content = await fs.readFile("./404.html")
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write(content)

    }

    res.end();
  }).listen(8080);