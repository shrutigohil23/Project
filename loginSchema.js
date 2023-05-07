const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "role",
  },
});

module.exports = mongoose.model("login", loginSchema);
