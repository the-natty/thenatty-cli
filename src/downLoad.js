const downLoad = require('download-git-repo')
const chalk = require('chalk')
// 动画
const ora = require('ora')

let url = 'the-natty/akc-template-h5'
let clone = false
let downGit = (name) => {
    const spinner = ora('pulling template...')
    spinner.start()
    downLoad(url, name, {
        clone
    }, err => {
        spinner.stop()
        console.log(err ? chalk.red(err) : chalk.green("create project success"))
        process.exit(1)
    })

}
module.exports = downGit