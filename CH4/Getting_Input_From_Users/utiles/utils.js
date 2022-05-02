import fs from 'fs';

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added');
    }else {
        console.log('note title taken!');
    }
};

const removeNote = function (title){
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // });
    notes.splice(notes.findIndex(note => note.title === title), 1);
    saveNotes(notes);

}

const saveNotes = function (notes) {
    // Convert Object to JSON FILE
    const addNotes = JSON.stringify(notes);
    fs.writeFileSync('1-json.json', addNotes);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('1-json.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }

};

export default {
    addNotes,
    removeNote
};