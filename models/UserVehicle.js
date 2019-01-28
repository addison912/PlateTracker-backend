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
  }
});

const UserVehicle = mongoose.model("UserVehicle", UserVehicleSchema);

module.exports = UserVehicle;
