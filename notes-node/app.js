console.log('Starting App');

//Load Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(argv.title);
} else if(command === "remove"){
    console.log('Removing note')
}
else{
    console.log("Command not recognized");
}