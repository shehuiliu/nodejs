const http = require("http")
const fs = require("fs")
const path = require("path")
const server = http.createServer()
server.on('request', (req, res) => {
    // console.log('welconm my server');

    const url = req.url
    const method = req.method

    let fpath = ''
    if (url === "/" || url === '/index' || url === "/1") {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock/', url)
    }
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    fs.readFile(fpath, 'utf8', (err, datastr) => {
        if (err) { return res.end("404 not found.") }
        res.end(datastr)


    })
    // res.end("welcome to my server")

})
server.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})