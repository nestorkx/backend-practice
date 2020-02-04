const express = require('express');
const toDoRoutes = require('./todo/routes');
const router = express.Router();

/**
 * /todo
 **/
router.use('/todo', toDoRoutes);

module.exports = router;