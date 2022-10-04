const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.js");

router.get("/", userController.get_all_users);

router.get("/:id", userController.get_user);

router.post("/post", userController.post_users);

router.put("/update/:id", userController.put_user);

router.delete("/delete", userController.delete_all_users);

router.delete("/delete/:id", userController.delete_user);

module.exports = router;
