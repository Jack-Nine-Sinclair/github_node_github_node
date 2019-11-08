const http = require('http');

const qs = require('querystring');

//body-parser 

const server = http.createServer((req,res) => {
    req.method === 'post'
    if(req.url === '/login'){
        let str = '';
        req.on('data',(chunk) => {
            console.log(chunk)
            str+=chunk;
        })

        req.on('end',() => {
            console.log(qs.parse(str))
            req.body = qs.parse(str)
        })
    }
})
server.listen(3000,() => {
    console.log("服务启动成功")
})
