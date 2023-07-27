import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

// the first word 'Post' is the name we created for the mongoose model schema and the second word 'Post' is related to the variable with the object
const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
