const net = require("net");


// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
      //calls the function for user input
    stdin.on('data', data => handleUserInput(data))

    stdin.resume();

 return stdin;
}

//Checks if a key is pressed and carries out an action (i.e exiting the game)

  const handleUserInput = function(key) {
    
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    //console.log("up");
    connection.write("Move: up") ;
    
  }
  if (key === 'd')  {
    //console.log("right");
    connection.write("Move: right"); 
  }
  if (key === 's') {
    //console.log("down");
     connection.write("Move: down"); 
  }
  if (key === 'a') {
    //console.log("left");
    connection.write("Move: left"); 
  }
}

module.exports = {setupInput}