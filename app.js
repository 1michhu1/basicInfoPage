const express = require('express')
const fs = require('fs/promises');
let app = express()


app.engine('html', require('ejs').renderFile)

async function getView(req, res) {
    let filename
    if (req.url === '/') {
        filename = "./index.html"
    } else {    
        filename = "./" + req.url + ".html"
    }

    try {
        const content = await fs.readFile(filename)
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(content)

    } catch(err) {
        const content = await fs.readFile("./404.html")
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write(content)

    }
    res.end()
}

app.get("*", getView)



app.listen(8080)