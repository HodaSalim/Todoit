const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: [
      50,
      "list titles should be short and precise, you can add more in description",
    ],
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  checklist: [
    {
      title: {
        type: String,
        required: true,
        default: "checklist",
      },
      items: [
        {
          title: {
            type: String,
            required: true,
          },
          dueDate: {
            type: Date,
          },
          completed: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
  ],
  labels: [String],
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
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
  completed: {
    type: Boolean,
    default: false,
  },
});

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;
