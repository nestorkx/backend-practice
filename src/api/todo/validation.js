const Joi = require('joi');

module.exports = {
   // POST todo/add-task
   addTask: {
       body: {
           task: Joi.string()
             .lowercase()
             .trim()
             .required()
       }
   },
   // PUT todo/edit
    editTask: {
       body: {
           _id: Joi.string(),
           task: Joi.string()
               .lowercase()
               .trim()
               .required()
       }
    }
};