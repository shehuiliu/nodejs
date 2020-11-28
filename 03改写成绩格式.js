const fs = require('fs')//导入fs文件模块
fs.readFile('\成绩.txt', 'utf8', (err, dataStr) => {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    const oldarr = dataStr.split(' ')
    console.log(oldarr);
    const newarr = []
    oldarr.forEach(item => {
        newarr.push(item.replace(': '))
    })
    const newstr = newarr.join('\r\n')
    fs.writeFile('\成绩-ok.txt', newstr, err => {
        if (err) { return console.log("读取文件失败" + err.message) }
        console.log(err);
    })
})