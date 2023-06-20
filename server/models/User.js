const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: [validator.isAlpha, "Name can contain only letters (a-zA-Z)"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    validate: [
      validator.isAlphanumeric,
      "Username can only contain only letters and numbers (a-zA-Z0-9)",
    ],
    maxlength: 30,
    minlength: 3,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid email"],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: [
      validator.isStrongPassword,
      "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters.",
    ],
  },
  boards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
