const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Set up express
const app = express();

// Connect to MongoDB
mongoose.connect(config.MONGODB_CONNECTION_STRING);

// setup MiddleWares
app.use(cors());
