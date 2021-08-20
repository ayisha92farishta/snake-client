const net = require("net");

const {connect} = require('./client')

console.log("Connecting ...");



connect();

//Checks if a key is pressed and carries out an action (i.e exiting the game)

const handleUserInput = function(key) {
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  }
  
}
//

 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
//calls the function for user input
  stdin.on('data', handleUserInput)

  return stdin;
}



setupInput();
