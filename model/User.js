import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    unique: true,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    unique: true,
    required: true,
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    unique: true,
    require: true,
    maxlength:10,
    minlenght:10
  },
  occupation: {
    type: String,
  },
  company: {
    type: String,
  },
  password: {
    type: String,
    require: true
  },
});

export default mongoose.model("User", UserSchema);
