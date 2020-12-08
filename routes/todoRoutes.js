const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskController");

const todoRoute = express.Router();

todoRoute.route("/tasks").get(getAllTasks).post(createTask);

module.exports = todoRoute;
