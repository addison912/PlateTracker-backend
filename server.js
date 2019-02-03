const express = require("express"),
  bodyParser = require("body-parser"),
  passport = require("./config/passport")(),
  jwt = require("jsonwebtoken"),
  cors = require("cors"),
  routes = require("./routes");

// creating express app
const app = express();

// middleware
app.use(cors());
app.use(passport.initialize());
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use("/uploads", express.static("uploads"));
app.use("/user", routes.user);
app.use("/verify", routes.verify);
app.use("/post", routes.post);
app.use("/comment", routes.comment);
app.use("/user-vehicles", routes.userVehicle);
app.use("/stolen-vehicles", routes.stolenCar);

// server connection
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
