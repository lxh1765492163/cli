# 创建脚手架入口文件
package.json创建bin 对象 ， 并设置脚手架名称对应的入口文件

(```)
  "bin":{
      "mycli":"./bin/入口文件"
  }
(```)

# 将脚手架名称设置为命令行识别的
npm link

npm link还有一个作用就是动态的引入组件包

#!/usr/bin/env node
入口文件必须添加这句代码 ， 指明用node运行代码 ， 否则运行命令行发现入口引入文件会报错

# commander
解析命令行参数
方便的定义option(包括option的描述和其回调函数)和子命令

program.command自定义指令 & program.opts ==指令参数 ， 

注意区分自定义指令 ， 指令参数
自定义指令 mycli start
指令参数 mycli -d



