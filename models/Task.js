const uniquid = require("uniquid");
class Task {
  constructor(description) {
    this.taskID = uniquid();
    this.description = description;
    this.status = false;
  }
}

module.exports = Task;
