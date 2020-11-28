const fs = require("fs")//导入fs模块
const path = require("path")//导入path模块
// 2.定义一个写入css/js文件的样式
const regCss = /<style>[\s\S]*<\/style>/
const regjs = /<script>[\s\S]*<\/script>/
// 1.读取闹钟案例的HTML内容
fs.readFile(path.join(__dirname, './file/index.html'), 'utf8', (err, datastr) => {
    if (err) {
        return console.log("读取内容失败" + err.message);
    }
    relovecss(datastr)
    relovejs(datastr)
    regloveHtml(datastr)
})
function relovecss(htmlstr) {
    //检索正则表达式里的匹配内容
    const r1 = regCss.exec(htmlstr)//这里返回的是一个伪shuzu
    // console.log(cssStr[0]);
    // 3.更换style标签
    const newcss = r1[0].replace("<style>", "").replace("</style>", "")
    // 4.写入css0文件
    same('index.css', newcss)
}
//写入js文件
function relovejs(htmlstr) {
    const j1 = regjs.exec(htmlstr)
    const newjs = j1[0].replace("<script>", "").replace("</script>", "")
    same('index.js', newjs)

}
//写入html文件
function regloveHtml(htmlstr) {
    const h1 = htmlstr.replace(regCss, '<link rel="stylesheet"  href="./index.css"/>').replace(regjs, '<script src="./index.js"></script>')
    same('index.html', h1)
}
function same(wj, str) {

    fs.writeFile(path.join(__dirname, "./clock/", wj), str, err => {
        const kz = path.extname(wj).substr(1)
        if (err) {
            return console.log(`写入${kz}文件失败`);
        }
        console.log(`写入${kz}文件成功`);
    })
}