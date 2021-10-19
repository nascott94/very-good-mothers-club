import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    // validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  password: String,
  retypePassword: String,
  phoneNumber: Number,
});

const user = mongoose.model("user", userSchema);

export default user;
