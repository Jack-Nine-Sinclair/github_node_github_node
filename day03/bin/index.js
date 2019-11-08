#! /usr/bin/env node

let program = require('commander');

let inquirer = require('inquirer');

let fs = require('fs');

let path = require('path');

// const promptList = [{
//     type: 'input',
//     message: '设置一个用户名:',
//     name: 'name'
// },
// {
//     type: 'password',
//     message: '设置密码:',
//     name: 'pwd'
// },
// {
//     type:'input',
//     message:'输入邮箱',
//     name:'email'
// }];

// const promptList = [
//     {
//         type:'input',
//         message:'输入项目名称',
//         name:'name'
//     },
//     {
//         type:'input',
//         message:'输入版本号',
//         name:'version'
//     }
// ]

const promptList = [
    {
        type:'input',
        message:'红灯停吗？',
        name:'name'
    },
    {
        type:'input',
        message:'绿灯行吗？',
        name:'version'
    }
]

let userlist = [{username:'lixd',pwd:'1234'},{username:'zs',pwd:'123'}];

program
    .command('login')
    .description('登录npm的官网')
    .action(function(){

        inquirer.prompt(promptList).then(answers => {
            console.log(answers)
            // let isSuccess = userlist.some(item => item.username === answers.name && item.pwd === answers.pwd)
            // if(isSuccess){console.log("登录成功")}else{
            //     console.log("登录失败")
            // }
            fs.writeFileSync(path.join(process.cwd(),'package.json'),JSON.stringify(answers));
        })
        // let username 

        // let pwd 

        //npm 官网  /login 
    })

program.parse(process.argv);

// program
//     .version('1.0.0','-v,--version')  //-V --version
//     .option('-a,--add','add something')
//     .option('-u,--update','update something')
//     .option('-r,--remove','remove something')
//     .option('--add-file','add a file')
//     .option('--no-add','not add a file')
//     .parse(process.argv)

// console.log('you choose')

// if(program.add){
//     console.log("add something")
// }else{
//     console.log("no add a file")
// }

// if(program.update) console.log('update something')

// if(program.remove) console.log('remove something')

// if(program.addFile)  console.log("add a file")
