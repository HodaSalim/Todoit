const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: [30, "list titles should be short and precise"],
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const List = mongoose.model("List", ListSchema);
module.exports = List;
