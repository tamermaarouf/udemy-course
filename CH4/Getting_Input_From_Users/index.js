import chalk from "chalk";
import yargs from 'yargs';
import notes from './utiles/utils.js';

// --- ADD COMMAND ----
yargs.command({
  command: 'add',
  describe: 'Have Jenkins add your notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// --- REMOVE COMMAND ----
yargs.command({
  command: 'remove',
  describe: 'Have Jenkins remove your notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
    console.log('Removing your notes, sir...', argv.title);
  }
});

// --- READ COMMAND ----
yargs.command({
  command: 'read',
  describe: 'Have Jenkins read your notes',
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'      
    }
  },
  handler(argv) {
    console.log('Reading your notes, sir...');
    notes.readNote(argv.title);
  }
});

// --- list COMMAND ----
yargs.command({
  command: 'list',
  describe: 'Have Jenkins list your notes',
  handler(argv) {
    notes.listNote();
  }
});
yargs.parse();