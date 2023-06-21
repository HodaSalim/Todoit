const express = require("express");
const cardController = require("./../controllers/cardController");

const router = express.Router();

router.route("/").get(cardController.getAllCard).post(cardController.addCard);

router
  .route("/:id")
  .get(cardController.editCard)
  .delete(cardController.deletecard);

module.exports = router;
