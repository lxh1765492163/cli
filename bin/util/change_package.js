const fs = require('fs');
var {green} = require('./color.js');


const change_package = (sourcePath, res)=>{
    return new Promise((resolve)=>{
        fs.readFile(sourcePath+'/package.json', 'utf8', (err, data) => {
            if (err) throw err;
            const { author , name  } = res;
            let json = data.toString();

            json = json.replace(/demoName/g,name.trim())
            json = json.replace(/demoAuthor/g,author.trim())

            const path = process.cwd()+ '/package.json' // process.cwd() 方法会返回 Node.js 进程的当前工作目录

            //写入文件 JSON.stringify(json);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
            fs.writeFile(path, json, 'utf8', (err, data) => {
                if (err) throw err;
                green('----创建json文件成功---');
                resolve();
            });
        });
      })
};


module.exports = change_package;