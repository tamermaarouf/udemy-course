import chalk from "chalk";
import yargs from 'yargs';


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
  handler: function (argv) {
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
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
  handler: function (argv) {
    console.log('Removing your notes, sir...', argv.title);
  }
});

// --- READ COMMAND ----
yargs.command({
  command: 'read',
  describe: 'Have Jenkins read your notes',
  handler: function (argv) {
    console.log('Reading your notes, sir...');
  }
});

// --- list COMMAND ----
yargs.command({
  command: 'list',
  describe: 'Have Jenkins list your notes',
  handler: function (argv) {
    console.log('listing your notes, sir...', argv);
  }
});
yargs.parse();