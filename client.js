const net = require('net');
const {IP, PORT} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('YOU ARE IN THE GAME');
    conn.write('Name: REW');
    
  });

  return conn;

}

//console.log('Connecting ...');
//connect();

module.exports = {connect};