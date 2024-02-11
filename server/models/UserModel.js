const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String, 
      required: true,
    },
}
);

const Usermodel = mongoose.model("Usermodel", UserSchema);
module.exports = Usermodel;