const http = require('http')
const fs = require('fs')
let type = {
    '/json':'application/json',
    '/txt':'text/plain',
    '/jpg':'image/jpg'
}
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':type[req.url]})
    if(req.url==='/json'){
        res.end(JSON.stringify({code:1,list:[{'title':'title'}]}))
    }else if(){
        
    }
})

