#### npm (node package manager) node的包管理器

npm -v  查看版本号

npm init  ---->package.json文件

npm init -y  快速生成package.json文件

#### 下载

    >本地下载   

        线上依赖  swiper   ----->  dependencies字段

            npm install/i <包名> --save/-S

        开发依赖  --->  devDependencies字段

            npm install/i <包名> --save-dev/-D

    >全局下载

        npm install/i <包名> -g

    下载指定版本的包

        npm i <包名@版本号>

#### 更新

    npm update <包名> -S/-D/-g

#### 卸载

    >本地下载

        线上依赖  swiper 

            npm uninstall <包名> --save/-S

        开发依赖

            npm uninstall <包名> --save-dev/-D

    >全局下载

        npm uninstall <包名> -g
        
    查看全局包下载的路径  npm root -g

#### 问题：不是内部外部命令：

    1.没下包

    2.环境变量  path
    
    path  
    
    NODE_PATH


    2.问题：can not find module

    1.没下包

#### require(模块标识)  引入一个模块

1>路径

2>包名


#### nodejs遵循的是commonjs规范

模块的引入和抛出

require()  默认找的是module.exports 抛出的内容

>module.exports 和 exports的区别：

exports其实是module.exports的一个别名

exports必须以属性的形式去抛出,后者不会覆盖前者

module.exports 后者覆盖前者

#### node包查找规则

1.node_modules  : 当前文件夹下找 ---> 一级一级往上找直到磁盘根目录--->环境变量找NODE_PATH  

can not find module

2.  1>找包名文件夹

    2>package.json 里的main字段指定的入口文件

    3>index.js

#### 镜像源：

1.国内的镜像源  （淘宝）  https://registry.npm.taobao.org

2.国外    http://registry.npmjs.org/

查看镜像源：  npm config get registry  

设置镜像源：  npm config set registry  路径

#### 安装包的流程

1> 查看包是否存在  https://registry.npmjs.org/<包名>

2> 下载对应的压缩包到缓存目录   npm config get cache  查看缓存目录

3> 解压到对应的目录  --save/--save-dev   -g

#### npm相关的命令

npm view <包名> versions  查看包所有的版本号

npm view <包名> version  最新的版本

#### 查看全局包的解压路径

npm config set prefix   路径

npm config get prefix 

npm config list  查看所有配置

#### 发包  

注：必须要是国外的镜像源

1.新建文件夹  ---> package.json文件  npm init  

>name不能和现有的包名冲突，不能有大写字母   lixd-bao

2>npm login

3>npm publish

再次发布： 改版本号  npm publish

npm unpublish <包名> --force   强制删除   24h之内可以删除 














       