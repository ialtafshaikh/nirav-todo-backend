const fs = require("fs");
const path = require("path");

const Task = require("../models/Task");

let fileName = path.join(__dirname, "../data", "tasks.json");
let tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

//middleware
const verifyPostRequest = (req, res, next) => {
  let requiredProps = ["description"];
  let result = requiredProps.every((prop) => {
    return req.body[prop];
  });
  if (!result) {
    res.status(400).json({ status: "unsuccessful", message: "invalid body" });
  } else {
    next();
  }
};

const getAllTasks = (req, res, next) => {
  res.status(200).json({ status: "successful", data: tasks });
};

const createTask = (req, res, next) => {
  let newTask = new Task(req.body.description);
  tasks.push(newTask);
  fs.writeFile(fileName, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      res.status(500).json({ status: "Internal Error" });
      return err;
    }
    res.status(201).json({ status: "successfull", data: [newTask] });
  });
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.verifyPostRequest = verifyPostRequest;
