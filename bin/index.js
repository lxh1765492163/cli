#!/usr/bin/env node
// 在写npm包的时候需要在脚本的第一行写上#!/usr/bin/env node ，用于指明该脚本文件要使用node来执行。
// /usr/bin/env 用来告诉用户到path目录下去寻找node，#!/usr/bin/env node 可以让系统动态的去查找node，已解决不同机器不同用户设置不一致问题。

var program = require("commander");
var pkg = require("../package.json");
var inquirer = require('inquirer');
var {blue, green} = require('./util/color.js');


var create = require('./command/create');
var start = require('./command/start');
var build = require('./command/build');

//设置版本号
program.version(pkg.version);

//注册创建
create();
//开始
start();
//编译
build();

program.parse(process.argv);