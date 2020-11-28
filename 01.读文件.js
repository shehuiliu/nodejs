const fs = require("fs")
fs.readFile('./file/1.txt', 'utf8', (err, suc) => {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    return console.log(suc);
})