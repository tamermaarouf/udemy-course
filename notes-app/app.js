/*const fs = require('fs');
fs.writeFileSync('notes.txt', 'My name is Tamer');
fs.appendFileSync('notes.txt', 'Second Line')*/

/*const add = require('./utils.js');
const sum = add(4, -2);
console.log(sum);*/

const notes = require('./notes.js');
const myNotes = notes();

console.log(myNotes);