const db = require("./models");

let user_list = [
  {
    firstName: "Addison",
    lastName: "Moore",
    username: "testUser",
    email: "testuser@email.com",
    password: "Password123",
    vehicles: []
  },
  {
    firstName: "Test",
    lastName: "User",
    username: "testUser1",
    email: "testuser1@email.com",
    password: "Password123",
    vehicles: []
  }
];

let post_list = [
  {
    title: "Test Post",
    picture: "uploads/postPics/13123.jpg",
    body:
      "This is the body of the post. This is the body of the post. This is the body of the post. This is the body of the post.",
    date: "Thurday, January 31, 2019"
  },
  {
    title: "Test Post",
    picture: "uploads/postPics/13123.jpg",
    body:
      "This is the body of the post. This is the body of the post. This is the body of the post. This is the body of the post.",
    date: "Thurday, January 31, 2019"
  },
  {
    title: "Test Post",
    picture: "",
    body:
      "This is the body of the post. This is the body of the post. This is the body of the post. This is the body of the post.",
    date: "Thurday, January 31, 2019"
  }
];

simpleCreate(db.User, user_list, "users");
simpleCreate(db.Post, post_list, "posts");
// simpleCreate(db.Comments, comment_list, "comments");
// simpleCreate(db.StolenCar, stolenCar_list, "stolen cars");
// simpleCreate(db.UserVehicle, user_vehicle_list, "user vehicles");

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
