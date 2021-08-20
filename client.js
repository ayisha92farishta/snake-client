const net = require("net");


//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  })

  //intepret incoming data as text 
  conn.setEncoding("utf8");


  //incoming data handling
  conn.on('data',(data) => {
    console.log('Server says: ', data)
  })

  //prints a message when connection is established

  conn.on('connect', () => {
    conn.write("Successfully connected to game server")
    //gives our snake a name(i.e. AFA)
    conn.write("Name: AFA")
  })

  return conn;

};

console.log("Connecting ...");

connect();

module.exports = {connect};
