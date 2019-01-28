const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/PlateTracker-backend")
  .then(connection => console.log("Connection established!"))
  .catch(err => console.log("Connection failed!", err));

const StolenCar = require("./StolenCar");
const User = require("./User");
const Comments = require("./Comments");
const Post = require("./Post");
const UserVehicle = require("./UserVehicle");

module.exports = { User, Comments, Post, UserVehicle };
