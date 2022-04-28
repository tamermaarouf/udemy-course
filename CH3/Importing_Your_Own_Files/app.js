
import validator from 'validator';
import utils from './utils.js';
import chalk from 'chalk';
// import add from './utils.js';


const sum = utils.add(4, 4);

console.log(utils.name);
console.log(sum);
console.log(chalk.redBright.inverse.bold('Tamer Maarouf in redBright text'));
console.log(chalk.green('Success'));
console.log(validator.isEmail('tamermaarouf@gmail.com'));


