#!/usr/bin/env node
const { program } = require('commander')
const process = require('process')
const inquirer = require('inquirer')
// const ora = require('ora')


// 第一句提示语 
console.log('cli create v1.0.0')

// 处理参数
program
    .option('create <project> [other...]')
    .description('创建项目')
    .action((project, args) => {
        //  命令行的逻辑代码
        console.log(project)
        console.log(args)
        // inquirer.promopt([
        //     {
        //         type: 'list',
        //         name: 'frameWork',
        //         message: 'select a frameWork',
        //         choices: ['vanilla', 'vue', 'React', 'Preact', 'Lit', 'Svelte', 'others']
        //     }
        // ]).then((answer) => {
        //     console.log(answer)
        // })
    })
program.parse(process.argv)

