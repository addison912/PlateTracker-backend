simpleCreate(db.User, "users");
simpleCreate(db.Post, "posts");

function simpleDelete(DB, name) {
  DB.deleteMany({}, (err, objects) => {
    console.log("deleted all", name);
  });
}
