const Post = require("../models/Post");
const db = require("../models");
const fs = require("fs");

module.exports = {
  create: (req, res) => {
    db.User.findById(req.body.userId, (err, user) => {
      let date = Date.now();
      let fileName = "";
      let base64Data;
      if (/^data:image\/jpeg;base64,/.test(req.body.picture)) {
        base64Data = req.body.picture.replace(/^data:image\/jpeg;base64,/, "");
        fileName = `postPic_${date}.jpeg`;
      } else if (/^data:image\/png;base64,/.test(req.body.picture)) {
        base64Data = req.body.picture.replace(/^data:image\/png;base64,/, "");
        fileName = `postPic_${date}.png`;
      } else if (/^data:image\/gif;base64,/.test(req.body.picture)) {
        base64Data = req.body.picture.replace(/^data:image\/gif;base64,/, "");
        fileName = `postPic_${date}.gif`;
      } else return console.log("invalid image type");
      fs.writeFile(
        `${__dirname}/../uploads/postPics/${fileName}`,
        base64Data,
        "base64",
        function(err) {
          console.log(err);
        }
      );
      let path = `/uploads/postPics/${fileName}`;
      let newPost = new Post({
        user: user,
        title: req.body.title,
        picture: path,
        body: req.body.body,
        comments: [],
        date: req.body.date
      });
      if (err) {
        res.status(404).json("user not found");
        return console.log(err);
      }
      newPost.save(function(err, post) {
        if (err) {
          return console.log("create error: " + err);
        }
        console.log("created a new post,", post.title);
        res.status(200).json("new post created");
      });
    });
  },
  index: (req, res) => {
    Post.find({}, (err, posts) => {
      if (err) {
        res.status(404).json("unable to get posts");
        return console.log(err);
      }
      res.status(200).json(posts);
    });
  }
};
