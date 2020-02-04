const httpStatus = require('http-status');
const ToDo = require('./model');
const { DateTime } = require('luxon');

/* *
* Crea un nueva tarea
* */

exports.register = async (req, res, next) => {
  try {
      const { task } = req.body;
      const isTaskExists = await ToDo.findOne({ task });
      if (isTaskExists) {
          throw new Error({
           message: ('Esta tarea ya existe en la BD.').json(),
           status: httpStatus.CONFLICT
          });
      }

      await new ToDo({
        task
      }).save();

      res.status(httpStatus.CREATED).json();

  } catch (error) {
      return next(error)
  }
};

/* *
* Obtenemos todo las tareas
* */
exports.todos = async (req, res, next) => {
    try {
        let query = {
           status: 'active'
        };
        let toDo = await ToDo.find(query);
        return res.status(httpStatus.OK).json(toDo);
    } catch (error) {
        return next(error);
    }
};

/*
* Edita una tarea con ID
* */

exports.edit = async (req, res, next) => {
  try {
      const { _id, task } = req.body;
      let updateFields = {
        task
      };

      await ToDo.findOneAndUpdate({_id: _id }, updateFields);

      return res.status(httpStatus.NO_CONTENT).json();
  } catch (err) {
      return next(err);
  }
};

/**
 * Elimina una tarea con ID
**/

exports.delete = async (req, res, next) => {
    try {
        const { _id } = req.body;
        const query = { _id: _id };
        const update = {
          status: 'deleted',
          updated_at: DateTime.local().toSeconds()
        };

        await ToDo.findOneAndUpdate(query, update);

        return res.status(httpStatus.NO_CONTENT).json();
    } catch(err) {
        return next(err);
    }
};