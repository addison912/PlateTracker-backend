const Post = require("../models/Post");
const db = require("../models");

module.exports = {
  create: (req, res) => {
    console.log(req.body.userId);
    db.User.findById(req.body.userId, (err, user) => {
      let newPost = new Post({
        user: user,
        title: req.body.title,
        picture: req.body.picture,
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
  }
};

// create: (req, res) => {
//   let newPost = new Post({
//     userId: req.body._id,
//     title: req.body.title,
//     picture: req.body.picture,
//     body: req.body.body,
//     comments: [],
//     date: req.body.date
//   });
//   newPost.save(function(err, post) {
//     if (err) {
//       return console.log("create error: " + err);
//     }
//     console.log("created a new post: ", post.title);
//     res.status(200).json("new post created");
//   });
// }
// };
