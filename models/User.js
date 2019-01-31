const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,

    unique: true
  },
  password: { type: String, required: true },
  vehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserVehicle"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// required: true,
// match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
