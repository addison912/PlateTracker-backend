const Post = require("../models/Post");
const db = require("../models");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    db.User.findOne({ username: req.body.username })
      .exec()
      .then(user => {
        let date = new Date();
        let newPost = new Post({
          user: user,
          title: req.body.title,
          picture: req.body.picture,
          body: req.body.body,
          comments: [],
          date: date
        });
        newPost
          .save(function(err, post) {
            if (err) {
              return console.log("create error: " + err);
            }
            console.log("created a new post,", post.title);
          })
          .catch(err => {
            console.log("City not found!");
            console.log(err);
            res.status(500).json({ err });
          });
      });
  }
};
