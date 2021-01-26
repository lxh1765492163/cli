const fs = require('fs');
var {green} = require('./color.js');




const fn = (paths=[], sourcePath, currentPath)=>{


    const copy_file = (sourcePath, currentPath)=>{

    }

    paths.map((item)=>{
        const  newSoucePath = sourcePath + '/' + item;
        const  newCurrentPath = currentPath + '/' + item;

        /* 判断文件信息 */
        fs.stat(newSoucePath, (err, stat)=>{
            if(err){
                throw err
            }

            //文件
            if(stat.isFile() && item !=='package.json' ){
                 /* 创建读写流 */
                //  const readSteam = fs.createReadStream(newSoucePath);
                //  const writeSteam = fs.createWriteStream(newCurrentPath);
                //  readSteam.pipe(writeSteam);
                console.log(stat, '11');
            //文件夹
            }else if(stat.isDirectory()){
                fs.mkdir(newCurrentPath, (erro, data)=>{
                    if(err){
                        throw err
                    }

                    copy_file(newSoucePath, newCurrentPath)
                    console.log(data, '22');
                })
                console.log(stat, '22');
            }
        })
    });
}



//读取源路径下的所有路径列表
const readDir = (sourcePath, currentPath)=>{
    fs.readdir(sourcePath, (err, paths)=>{
        if(err){
            throw err
        }
        console.log('---------------||-----------------------');
        console.log(paths);
        paths?.length && create_dir_file(sourcePath, currentPath, paths);
    })
}


//根据文件路径创建文件以及文件夹
const create_dir_file = (sourcePath, currentPath, paths)=>{
    paths.map((item)=>{
        const  newSoucePath = sourcePath + '/' + item;
        const  newCurrentPath = currentPath + '/' + item;

        console.log(newSoucePath, newCurrentPath, '11');
        /* 判断文件信息 */
        fs.stat(newSoucePath, (err, stat)=>{
            if(err){
                throw err
            }
            //文件
            if(stat.isFile() && item !=='package.json' ){
                 /* 创建读写流 */
                 const readSteam = fs.createReadStream(newSoucePath);
                 const writeSteam = fs.createWriteStream(newCurrentPath);
                 readSteam.pipe(writeSteam);
            //文件夹
            }else if(stat.isDirectory()){
                if(item=='.git' || item =='package.json' || item === 'node_modules' ){
                    return;
                }
                fs.mkdir(newCurrentPath, (erro, data)=>{
                    if(err){
                        console.log('路径异常');
                        throw err
                    }
                    readDir(newSoucePath, newCurrentPath)
                });
            }
        })
    });
}



module.exports = (sourcePath)=>{
    readDir(sourcePath, process.cwd());
}