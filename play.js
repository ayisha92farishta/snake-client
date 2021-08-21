const net = require("net");

//importing the connection codes
const {connect} = require('./client')
//importing the user input codes
const {setupInput} = require('./input');

console.log("Connecting ...");
//calls the connect function

//calls the setupInput function
const conn = connect()

setupInput(conn);
