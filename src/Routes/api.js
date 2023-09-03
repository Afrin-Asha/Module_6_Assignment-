
const express = require("express");
const router = express.Router();

//const blogControllers = require("../Controllers/blogController");
//router.get('/one',blogControllers.create)



// const controllers = require("../Controllers"); // Import all controller modules

// Define controller functions
const controllerFunctions = [
  "create",
  "read",
  "delete",
  "update"
];

// Define controller filenames
const controllerFiles = [
  "blogController",
  "blogDetailsController",
  "commentController",
  "messageController",
  "portfolioController",
  "productController",
  "profitController",
  "projectController",
  "serviceController",
  "titleController"
];

// Create routes for each controller and function

for (const controller of controllerFiles) {
  for (const func of controllerFunctions) {
    const routePath = `/${controller.toLowerCase()}/${func}`;
    const controllerFunction = require(`../Controllers/${controller}`)[func];

    router.get(routePath, controllerFunction);
    // localhost:3000/blogcontroller/create|read|delete|update
  }
}

module.exports = router;
