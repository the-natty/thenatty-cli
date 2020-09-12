#! /usr/bin/env node

const cmd = require("commander")
const chalk = require('chalk')
const downGit = require('./src/downLoad')
const options = require('./src/options')

cmd.command('create').description('create project').action(async (args) => {
    typeof args !== 'string' && (console.log(chalk.red('essential option -your-project-name')), process.exit(1))

    // 填选项
    await options()

    // 拉取
    await downGit(args)
})
cmd.parse(process.argv)