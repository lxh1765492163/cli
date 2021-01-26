var program = require("commander");
var inquirer = require('inquirer');
var {green} = require('../util/color.js');

module.exports = ()=>{
    program
    .command('build')
    .description('build a project')
    .action(function(){
        green('--------构建项目-------')
    });
}
