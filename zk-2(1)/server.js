const http = require('http');
const fs = require("fs");
let type = {
    '/json':'application/json',
    '/txt':'text/plain',
    'jpg':'image/jpeg'
}
const server = http.createServer((req,res)=>{
    res.writeHead(200,{Content})
    if(req.url==='json'){
        res.end(JSON.stringify({code:1,list:[{'title':'title'}]}))//buffer
    }else if(req.url==='/txt'){
        res.end('txt')
    }else if(req.url==='/jpg'){
        let bufImg = fs.readFileSunc('./1.jpg')
        res.end(bufImg)
    }else{
        res.end('ok')
    }
})




