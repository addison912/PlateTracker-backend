const express = require("express"),
  router = express.Router(),
  commentController = require("../controllers/comments.js");

module.exports = router;
// .get("/:id", commentController.bypostid)
// .post("/", commentController.create)
// .put("/:id", commentController.edit);
