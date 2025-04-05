// const mongoose = require("mongoose");
import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("Users", userSchema);
export default user;
