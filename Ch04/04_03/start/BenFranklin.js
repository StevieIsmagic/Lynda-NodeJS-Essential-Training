console.log(process.argv);
function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}

var greet = grab('user');

if (!greet) {
  console.log('u stink');
} else {
  console.log(` Welcome ${greet}`);
}