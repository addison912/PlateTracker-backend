const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StolenCarSchema = new Schema({
  make: String,
  model: String,
  type: String,
  year: Number,
  color: String,
  licenseState: String,
  licensePlate: String,
  vin: String,
  lastSeenDate: Date,
  lastSeenCity: String,
  lastSeenState: String,
  lastSeenZip: String
});

const StolenCar = mongoose.model("StolenCar", StolenCarSchema);

module.exports = StolenCar;
