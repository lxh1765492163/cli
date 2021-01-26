var program = require("commander");
var inquirer = require('inquirer');
var {green} = require('../util/color.js');
var path = require("path");
var change_package = require('../util/change_package.js');
var copy_template = require('../util/copy_template.js');

const question = [
    {
         name:'conf',              /* key */
         type:'confirm',           /* 确认 */
         message:'是否创建新的项目？' /* 提示 */
     },{
         name:'name',
         message:'请输入项目名称？',
         when: res => Boolean(res.conf) /* 是否进行 */
     },{
         name:'author',
         message:'请输入作者？',
         when: res => Boolean(res.conf)
     },{
         type: 'list',            /* 选择框 */
         message: '请选择创建项目类型？',
         name: 'type',
         choices: ['react'], /* 选项*/
         filter: function(val) {    /* 过滤 */
           return val.toLowerCase()
         },
         when: res => Boolean(res.conf)
     }
 ]


//设置命令行参数
module.exports = ()=>{
    program
    .command('create')
    .description('create a project ')
    .action(function(){
        green('👽 👽 👽 '+'欢迎使用mycli,轻松构建react 项目～🎉🎉🎉');
        inquirer.prompt(question).then(answer=>{
            console.log('answer=', answer );
            
            if(answer){
                const url = path.resolve(__dirname, '../template/react/');
                //修改package.json
                change_package(url, answer);
                copy_template(url);
            }

        })
    });
}