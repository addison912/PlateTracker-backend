const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserVehicleSchema = new Schema({
  make: String,
  model: String,
  type: String,
  year: Number,
  color: String,
  licenseState: String,
  licensePlate: {
    type: String,
    required: true
  },
  vin: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  lastSeenDate: Date,
  lastSeenCity: String,
  lastSeenState: String,
  lastSeenZip: String,
  postPublicly: Boolean,
  dateCreated: Date
});

const UserVehicle = mongoose.model("UserVehicle", UserVehicleSchema);

module.exports = UserVehicle;
