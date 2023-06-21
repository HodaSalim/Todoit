const express = require("express");
const listController = require("./../controllers/listController");

const router = express.Router();

router.route("/").get(listController.getAllLists).post(listController.addList);

router
  .route("/:id")
  .get(listController.editList)
  .delete(listController.deleteList);

module.exports = router;
