fs = require('fs')
fs.writeFile('./file/2.txt', '你好啊,二文件', (err) => {
    if (err) {
        return console.log("写入文件失败" + err.message)
    }
    return console.log(err)
})