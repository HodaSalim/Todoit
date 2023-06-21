const express = require("express");
const listController = require("./../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.addUser);

router
  .route("/:id")
  .get(userController.editUser)
  .delete(userController.deleteUser);

module.exports = router;
