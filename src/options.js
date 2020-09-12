const inquirer = require('inquirer')
let optionsArr = [
    {
        name: "platform",
        message: "project application platform('pc or h5)",
        default: 'h5'
    }
]

module.exports = () => {
    return inquirer
        .prompt(optionsArr)
}