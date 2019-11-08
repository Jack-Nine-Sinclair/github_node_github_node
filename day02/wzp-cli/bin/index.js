#! /user/bin/env node
//console.log(process.argv[2]+"你好")
//console.log(process.argv[2])
let {version} = require('../package.json')
let file = 'demo';
if(process.argv[2]==='-v'){
    console.log(version)
}else if(process.argv[2]==='create'){
    file = process.argv[3] ? process.argv[3]:file
    console.log("初始化项目"+file)
}



