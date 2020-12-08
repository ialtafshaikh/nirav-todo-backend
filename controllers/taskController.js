const getAllTasks = (req, res, next) => {
  console.log("from controller");
  res.send("response to the user");
};

const createTask = (req, res, next) => {
  console.log("from controller");
  res.send("task created");
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
