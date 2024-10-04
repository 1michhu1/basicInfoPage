const express = require('express')
const fs = require('fs/promises');
let app = express()


app.engine('html', require('ejs').renderFile)

async function getView(req, res) {
    let filename
    if (req.url === '/') {
        filename = "./index.html"
    } else {    
        filename = "." + req.url + ".html"
    }

    try {
        const content = await fs.readFile(filename)
        // res.set('Content-Type', 'text/html');
        res.send(content)

    } catch(err) {
        const content = await fs.readFile("./404.html")
        // res.set(400, {'Content-Type': 'text/html'});
        res.send(content)

    }
    res.end()
}

app.all("*", getView)



app.listen(8080)