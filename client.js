const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.102',
    port: 50541,
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

  //conn.on()

  return conn;

}

//console.log('Connecting ...');
//connect();

module.exports = {connect};