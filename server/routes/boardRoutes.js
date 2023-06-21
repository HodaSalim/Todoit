const express = require("express");
const cardController = require("./../controllers/boardController");

const router = express.Router();

router
  .route("/")
  .get(cardController.getAllBoards)
  .post(cardController.addBoard);

router
  .route("/:id")
  .get(cardController.editBoard)
  .delete(cardController.deleteBoard);

module.exports = router;
