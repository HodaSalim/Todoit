const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config/config");
const User = require("./models/User");
// Set up express
const app = express();

// Connect to MongoDB
mongoose.connect(config.MONGODB_CONNECTION_STRING);

// setup MiddleWares
app.use(cors());

//setup server
app.listen(config.EXPRESS_PORT, () =>
  console.log("express connection successful")
);
