const db = require("../models");

module.exports = {
  index: (req, res) => {
    db.StolenCar.find({}).then(cars => res.json(cars));
  },
  plate: (req, res) => {
    console.log("getting car by license plate");

    db.StolenCar.findOne(
      { licensePlate: req.params.licensePlate },
      (err, foundPlate) => {
        if (!foundPlate) {
          res.json("Vehicle not stolen");
        } else {
          res.json(foundPlate);
        }
      }
    );
  }
};
