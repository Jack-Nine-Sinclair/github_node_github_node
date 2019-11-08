#! /user/bin/env node

// http-server --->8000
// http-sever -p 9090 --->9090
// http-server -v --->版本号

let port = 8080
let app = require('../server')
if(process.argv[2] && process.argv[3]){
    port = process.argv[3]
}
//起服务:
let {version} = require('../package.json');
if(process.argv[2]==="-v"){
    console.log(version)
}else{
    port = process.argv[2] && process.argv[3] ? process.argv[3] : port
    app.listen(port,()=>{
        console.log("服务启动成功",port)
    })
}
