const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
    // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: KL');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: down');
  // })

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: left');

  //   }, 1000)
  // })

  // conn.on('connect', () => {
  //   conn.write('Move: right');
  // })
  
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};


module.exports = {connect};