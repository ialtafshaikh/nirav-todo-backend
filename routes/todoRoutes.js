const express = require("express");
const {
  getAllTasks,
  createTask,
  verifyPostRequest,
} = require("../controllers/taskController");

const todoRoute = express.Router();

todoRoute.route("/tasks").get(getAllTasks).post(verifyPostRequest, createTask);

module.exports = todoRoute;
