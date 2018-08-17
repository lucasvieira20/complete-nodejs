//Load Modules
const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age} age`);

var res = notes.addNote();
console.log(res);

console.log('Result: ', notes.add(9,-2));


console.log(_.isString(true));
console.log(_.isString("Same String"));

let arr = ["Copacabana", "Barra da Tijuca", "Ipanema"]; 0

var filteredArray = _.uniq(['Eduard', 'Andrew', 1, 'Andrew', 1, 2, 3]);
console.log(filteredArray);