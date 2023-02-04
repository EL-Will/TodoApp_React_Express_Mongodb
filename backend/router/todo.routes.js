const {
    apiGetTodoList,
    apiUpdateTodoList,
    apiCreateTodoList,
    apiDeleteTodoList
} = require('../controllers/todo.controllers');
const express = require('express');

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/api/v1/getTodoList',apiGetTodoList);
    router.put('/api/v1/updateTodoList',apiUpdateTodoList);
    router.post('/api/v1/createTodoList',apiCreateTodoList);
    router.delete('/api/v1/deleteTodoList/:id',apiDeleteTodoList);
    return app.use('/', router);
}

module.exports = {initWebRoute};
