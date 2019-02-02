const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/PlateTracker-backend"
  )
  .then(connection => console.log("Connection established!"))
  .catch(err => console.log("Connection failed!", err));

const StolenCar = require("./StolenCar");
const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");
const UserVehicle = require("./UserVehicle");

module.exports = { User, Comment, Post, UserVehicle, StolenCar };
