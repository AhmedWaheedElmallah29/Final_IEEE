const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchmea = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchmea.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(this.password, salt);
  this.password = hashed;
  next();
});

userSchmea.methods.genAuthToken = function () {
  return jwt.sign(this.toJSON(), "ThePassword");
};
module.exports = User = mongoose.model("User", userSchmea);
