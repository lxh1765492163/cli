var program = require("commander");
var inquirer = require('inquirer');
var {green} = require('../util/color.js');


 module.exports = ()=>{
    /* mycli start 运行项目 */
    program
    .command('start')
    .description('start a project')
    .action(function(){
        green('--------运行项目-------')
    });
}
