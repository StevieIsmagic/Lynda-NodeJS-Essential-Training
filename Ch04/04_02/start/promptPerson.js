var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
realPerson = {
  name: '',
  sayings: []
};

rl.question('What is the name of a real person?', (answer) => {

  realPerson.name = answer;

  rl.setPrompt(`What would ${realPerson.name} say ? `);

  rl.prompt();

  rl.on('line', (saying) => {
    
    rl.setPrompt(`What else would ${realPerson.name} say ? ('exit' to leave) `);
    
    rl.prompt()
  });
});