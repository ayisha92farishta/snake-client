// imports the files required

const net = require("net");

const { IP, PORT } = require('./constants');

//establishes a connection with the game server

const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //intepret incoming data as text

  conn.setEncoding("utf8");

  //incoming data handling

  conn.on('data',(data) => {
    console.log('Server says: ', data);
  
  });
  //prints a message when connection is established

  conn.on('connect', () => {

    console.log("Successfully connected to game server"); //message upon connecting
    
    conn.write("Name: AFA");  //gives our snake a name
   
  });
  return conn;

};


module.exports = {connect};
