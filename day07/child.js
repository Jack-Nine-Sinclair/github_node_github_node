console.log(process.argv.slice(2))//获取命令行参数

console.log(process.cwd())//获取全局进程的工作目录

console.log(process.env.PORT)//进程的变量环境

console.log(process.pid);
//process nodejs 全局对象

//taskkill /pid  <当前进程的pid> /f     强制关掉进程

console.log(process.platform) //win32

//node 特点:单线程单进程

//os 是node 内置的模块
const os =require("os");
console.log(os.cpus().length)

console.log(process.pid);

//子进程 创建子进程
b
//child_process node(内置模块)

//exec() sqawn execfile(不常用) fork

const child_process = require('child_process')
//第一种:child_process.exec(执行命令,(error,stdout,st))                 



