const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/router');
const error = require('./middlewares/error');
const { whitelist } = require('./config');

const server = express();

// parse body params and attache them to req.body
server.use(bodyParser.json());

// enable CORS - Cross Origin Resource Sharing
server.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// mount api todo routes
server.use('/', routes);

// if error is not an instanceOf APIError, convert it.
server.use(error.converter);

// catch 404 and forward to error handler
server.use(error.notFound);

// error handler, send stacktrace only during development
server.use(error.handler);

module.exports = server;