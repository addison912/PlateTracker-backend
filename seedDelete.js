simpleDelete(db.User, "users");
simpleDelete(db.Post, "posts");

function simpleDelete(DB, name) {
  DB.deleteMany({}, (err, objects) => {
    console.log("deleted all", name);
  });
}
