const { port, env } = require('./config');
const server = require('./server');
const database = require('./database');

database.connect();

server.listen(port, () => {
    console.log(`Server started on port ${port} (${env})`);
});

module.exports = server;
