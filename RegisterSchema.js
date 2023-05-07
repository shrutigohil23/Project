const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },  
  Gender: {
    type: String,
  },
  Field: {
    type: String,
  },
  roleid: {
    type: Number,
  },
  Status: {
    type: Number,
  },
  phonenum: {
    type: Number,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "role",
  },
});

module.exports = mongoose.model("register", registerSchema);
