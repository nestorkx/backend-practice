const mongoose = require('mongoose');
const {
    mongo, env
} = require('./config');

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', false);
}

exports.connect = () => {
  mongoose.connect(mongo.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  return mongoose.connection;
};