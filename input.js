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
  // key to exit game
  if (key === '\u0003') {
    process.exit();
  }
  //keys to control movement of the snake
  if (key === 'w') {
    connection.write("Move: up") ;
  }
  if (key === 'd')  {
    connection.write("Move: right"); 
  }
  if (key === 's') {
     connection.write("Move: down"); 
  }
  if (key === 'a') {
    connection.write("Move: left"); 
  }
  // special keys to interact with other players
  if (key === 'k') {
    connection.write("Say: Behind you!")
  }
  if(key === 'j') {
    connection.write("Say: I'm John Cena!")
  }
  if( key === 'l') {
    connection.write("Say: See ya l8r")
  }
}

module.exports = {setupInput}