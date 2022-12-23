import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema: any = new Schema({
  username: String,
  googleId: String,
});

const User = mongoose.model("user", userSchema);
export = User;
