const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appotschema = new Schema({
  patientname: {
    type: String,
  },
  age: {
    type: Number,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  reason: {
    type: String,
  },

  clinic: {
    type: Schema.Types.ObjectId,
    ref: "clinic",
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "file",
  },
  register: {
    type: Schema.Types.ObjectId,
    ref: "register",
  },
});

module.exports = mongoose.model("appointment", appotschema);
