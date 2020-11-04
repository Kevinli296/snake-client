const { connect } = require('./client');
const { setupInput } = require('./input');
const conn = connect();

console.log('Connecting ...');

setupInput(conn);