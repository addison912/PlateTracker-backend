const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
const config = require("../config/config");
const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const fs = require("fs");

module.exports = {
  index: (req, res) => {
    User.find({}).then(users => res.json(users));
  },
  signup: (req, res) => {
    if (req.body.username && req.body.password) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log("hashing error:", err);
          res.status(200).json({ error: err });
        } else {
          let date = Date.now();
          let fileName = "";
          let base64Data;
          if (/^data:image\/jpeg;base64,/.test(req.body.avatar)) {
            base64Data = req.body.avatar.replace(
              /^data:image\/jpeg;base64,/,
              ""
            );
            fileName = `profilePic_${date}.jpeg`;
          } else if (/^data:image\/png;base64,/.test(req.body.avatar)) {
            base64Data = req.body.avatar.replace(
              /^data:image\/png;base64,/,
              ""
            );
            fileName = `profilePic_${date}.png`;
          } else if (/^data:image\/gif;base64,/.test(req.body.avatar)) {
            base64Data = req.body.avatar.replace(
              /^data:image\/gif;base64,/,
              ""
            );
            fileName = `profilePic_${date}.gif`;
          } else console.log("invalid image type");
          fs.writeFile(
            `${__dirname}/../uploads/profilePics/${fileName}`,
            base64Data,
            "base64",
            function(err) {
              console.log(err);
            }
          );
          let path = `/uploads/profilePics/${fileName}`;

          let newUser = {
            username: req.body.username,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            avatar: path,
            password: hash
          };
          User.findOne({ username: req.body.username }).then(user => {
            if (!user) {
              User.create(newUser).then(user => {
                if (user) {
                  let payload = { id: user.id };
                  let token = jwt.sign(payload, config.jwtSecret);
                  res.json({ token });
                } else {
                  res.sendStatus(401).json({ err: "create user error" });
                }
              });
            } else {
              res.sendStatus(401);
            }
          });
        }
      });
    } else {
      res.sendStatus(401);
    }
  },
  login: (req, res) => {
    const secret = require("../config/config");

    console.log(req.body);
    if (req.body.username && req.body.password) {
      User.findOne({ username: req.body.username }).then(user => {
        if (user) {
          bcrypt.compare(req.body.password, user.password, (err, match) => {
            if (match) {
              const JWTToken = jwt.sign(
                {
                  username: user.username,
                  _id: user._id
                },
                secret.jwtSecret,
                {
                  expiresIn: "2h"
                }
              );
              return res.status(200).json({
                success: `${user.username} logged in successfully!`,
                jwt: JWTToken,
                user: {
                  username: user.username,
                  _id: user._id
                }
              });
            } else {
              res.status(404).json({ error: "Incorrect username or password" });
            }
          });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      });
    } else {
      res.status(404).json({ error: "Incorrect username or password" });
    }
  },
  profile: (req, res) => {
    console.log("finding user", req.params.userId);
    User.findById(req.params.userId, (err, user) => {
      console.log("USER: ", user);
      if (err) {
        console.log(err);
        return res.status(404).json(err);
      } else if (user === null) {
        return res.status(401).json({
          message: "User not found"
        });
      } else return res.json({ user });
    });
  }
};
