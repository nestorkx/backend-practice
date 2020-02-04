const mongoose = require('mongoose');
/**
 * TODO Schema
 * @private
 */

const toDoSchema = new mongoose.Schema({
    created_at: {
      default: Date.now,
      type: Number
    },
    task: { type: String },
    status: {
      default: 'active',
      enum: ['active', 'deleted'],
      type: String
    }
});

const model = mongoose.model('ToDo', toDoSchema);

model.createIndexes({
  task: 1
});

module.exports = model;