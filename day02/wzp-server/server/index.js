let Koa = require('koa');
let app = new Koa();
let static = require('koa-static');
let fs = require('fs');
let path = require('path');
const views = require('koa-views');
app.use(views(path.join(__dirname,'../views'),{
    extension:'ejs'
}))
//静态资源 process.cwd() 获取小黑板的工作目录
//中间件 --> 函数 (ctx,next) => {} ---> app.use()
app.use(async (ctx,next)=>{
    console.log(ctx.request.path);
    let url = path.join(process.cwd(),ctx.request.path)
    //1.当前的路径是否存在
    if(fs.existsSync(url)){
        //已经存在
        //是文件夹还是文件
        if(fs.statSync(url)){
            let dirList = fs.readdirSync(url);
            let urlList = dirList.map(item=>{
                return path,join(ctx.request.path,item)
            })
            await ctx.render('index',{
                title:'标题',
                list:dirList,
                urlList
            })
        }else{
            await next()
        }
    }else{
        await next()
    }
})
app.use(static(process.cwd()))

module.exports = app;