import chalk from 'chalk';
import fs from 'fs';

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    console.log(duplicateNote);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added');
    } else {
        console.log('note title taken!');
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    notes.splice(notes.findIndex(note => note.title === title), 1);
    saveNotes(notes);

};

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.bgCyanBright('listing your notes, sir...'));
    notes.forEach(note => {
        console.log(note.title);
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    console.log(chalk.inverse.bgCyanBright('reading your notes, sir...'));
    const findNote = notes.find(note => note.title === title);
    if(findNote){
        console.log(findNote.title);
        console.log(findNote.body);        
    }else {
        console.log(chalk.red.inverse('Note not found'));
    }
};

const saveNotes = (notes) => {
    // Convert Object to JSON FILE
    const addNotes = JSON.stringify(notes);
    fs.writeFileSync('1-json.json', addNotes);
};

const loadNotes = () => {
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
    removeNote,
    listNote,
    readNote
};