const net = require("net");

const { IP, PORT } = require('./constants');

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  })

  //intepret incoming data as text 
  conn.setEncoding("utf8");

  //incoming data handling
  conn.on('data',(data) => {
    console.log('Server says: ', data);
  
  })
  //prints a message when connection is established

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    //gives our snake a name(i.e. AFA)
    conn.write("Name: AFA");

   
  })
  return conn;

};

console.log("Connecting ...");


module.exports = {connect};
