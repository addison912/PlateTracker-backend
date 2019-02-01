const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
const config = require("../config/config");
const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");

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
          let newUser = {
            username: req.body.username,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            avatar: req.body.avatar,
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
              res
                .sendStatus(420)
                .json({ error: "username/password incorrect" });
            }
          });
        } else {
          res.sendStatus(404).json({ error: "User not found" });
        }
      });
    } else {
      res.sendStatus(401).json({ error: "username/password incorrect" });
    }
  }
};
