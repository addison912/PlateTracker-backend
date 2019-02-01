const express = require("express"),
  router = express.Router(),
  verifyController = require("../controllers/verify.js");

module.exports = router.use("/", verifyToken, verifyController.verify);

function verifyToken(req, res, next) {
  console.log("in verify...");
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    res.locals.token = bearerHeader;
    next();
  } else {
    res.sendStatus(403);
  }
}
