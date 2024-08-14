import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // unique: true, b/c 2 users or more can make Ther password Same
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;
