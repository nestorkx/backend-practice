const express = require('express');
const validate = require('express-validation');
const controller = require('./controller');
const { addTask, editTask } = require('./validation');

const routes = express.Router();

routes.route('/register').post(validate(addTask), controller.register);

routes.route('/all').get(controller.todos);

routes.route('/edit').put(validate(editTask), controller.edit);

routes.route('/delete').delete(controller.delete);

module.exports = routes;