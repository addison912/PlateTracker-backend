const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: String,
  picture: String,
  body: String,
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  location: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments"
    }
  ]
});

const Post = mongoose.model("Post", PostsSchema);

module.exports = Post;
