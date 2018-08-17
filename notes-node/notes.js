console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () =>{
	console.log('Getting all notes');
};

var getNote = () => {
	console.log('Geeting Single Note', title);
}

module.exports = {
	addNote,
	getAll,
	getNote
};