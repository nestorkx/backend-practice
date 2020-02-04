require('dotenv').config();

let config = {
  baseUrl: 'http://localhost:3001',
  env: process.env.NODE_ENV,
  mongo: {
    uri: 'mongodb://localhost:27017/local-express'
  },
  port: 3001,
  website: 'http://localhost:3000',
  whitelist: null
};

module.exports = config;