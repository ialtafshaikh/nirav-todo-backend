const fs = require("fs");
const path = require("path");

let fileName = path.join(__dirname, "../data", "tasks.json");
let tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllTasks = (req, res, next) => {
  res.status(200).json({ status: "successful", data: tasks });
};

const createTask = (req, res, next) => {
  res.send("task created");
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
