const Post = require("../models/Post");
const db = require("../models");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    let newPost = new Post({
      userId: req.body._id,
      title: req.body.title,
      picture: req.body.picture,
      body: req.body.body,
      comments: [],
      date: req.body.date
    });
    newPost
      .save(function(err, post) {
        if (err) {
          return console.log("create error: " + err);
        }
        console.log("created a new post: ", post.title);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  }
};
