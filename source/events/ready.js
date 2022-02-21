const chalk = require("chalk")
const config = require("../cfg/config.json")
module.exports = (client) => {
    console.log(chalk.magenta(`Dmls Helper  by dml#4665 \nPrefix is ${config.prefix}`));
  }