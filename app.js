const express = require("express");
const path = require("path");

const todoRouter = require("./routes/todoRoutes");

const PORT = 3000;
const app = express();

//root folder for the app is public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// MVC
// Model : holds the structure of the model
// View : page view (what users sees)
// controller : business logic

app.use("/todoList", todoRouter);

app.listen(PORT, () => {
  console.log(`Listeninig on Port http://localhost:${PORT}`);
});
