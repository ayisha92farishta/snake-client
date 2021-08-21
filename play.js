// imports the files required

const {connect} = require('./client');

const {setupInput} = require('./input');

//message while connecting

console.log("Connecting ...");

//calls the setupInput and connect function

const conn = connect();

setupInput(conn);
