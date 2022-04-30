import fs from 'fs';

const notes = {};

const addNotes = function(a, b) {
    notes.title = a;
    notes.body = b;
    // Convert Object to JSON FILE
    const addNotes = JSON.stringify(notes);
    fs.writeFileSync('1-json.json', addNotes);
};

export default addNotes;
