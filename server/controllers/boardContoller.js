const express = require("express");
const router = express.Router();

const Board = require("../models/Board");

exports.getAllBoards =
  ("/boards",
  async (req, res) => {
    try {
      const boards = await Board.find().populate("lists");
      res.json(boards);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.addBoard =
  ("/boards",
  async (req, res) => {
    try {
      const { title, createdBy } = req.body;
      const board = new Board({ title, createdBy });
      await board.save();
      res.json(board);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.editBoard =
  ("/boards/:boardId",
  async (req, res) => {
    try {
      const { title } = req.body;
      const board = await Board.findByIdAndUpdate(
        req.params.boardId,
        { title },
        { new: true }
      );
      res.json(board);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.deleteBoard =
  ("/boards/:boardId",
  async (req, res) => {
    try {
      const board = await Board.findByIdAndDelete(req.params.boardId);
      res.json(board);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });
