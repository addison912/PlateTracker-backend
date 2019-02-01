const express = require("express"),
  router = express.Router(),
  stolenCarController = require("../controllers/stolenCar.js");

module.exports = router
  .get("/", stolenCarController.index)
  .get("/:licensePlate", stolenCarController.plate);
// .post("/", stolenCarController.post)
// .put("/:id", stolenCarController.edit);
