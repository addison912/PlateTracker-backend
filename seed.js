simpleCreate(db.User, user_list, "users");
simpleCreate(db.Post, post_list, "posts");
simpleCreate(db.Comments, comment_list, "comments");

function simpleCreate(DB, object_list, name) {
  DB.deleteMany({}, (err, objects) => {
    DB.create(object_list, (err, objects) => {
      if (err) {
        return console.log("err", err);
      }
      console.log("deleted all", name);
      console.log("created", objects.length, name);
    });
  });
}
