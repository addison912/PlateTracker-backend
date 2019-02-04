const express = require("express"),
  router = express.Router(),
  postController = require("../controllers/posts.js");

module.exports = router
  .get("/all", postController.index)
  // .get("/:id", postController.byid)
  .post("/", postController.create)
  // .put("/:id", postController.edit);
  .get("/user/:userId", postController.byUser);
