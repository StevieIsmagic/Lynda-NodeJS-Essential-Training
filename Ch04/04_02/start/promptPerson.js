var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is the name of a real person?', (answer) => {

  console.log(answer);
});