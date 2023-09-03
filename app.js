
const express = require("express");
const app = express();
const Router = require("./src/Routes/api");

app.use("/", Router);
module.exports=app;




