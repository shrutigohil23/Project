const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinicSchema = new Schema({
  clinicName: {
    type: String,
  },

  Address: {
    type: String,
  },

  PhoneNum: {
    type: Number,
  },
  Timing: {
    type: String,
  },
  Rating: {
    type: Number,
  },
  About: {
    type: String,
  },
  CityId: {
    type: Number,
  },
  StateId: {
    type: Number,
  },
  Pincode: {
    type: Number,
  },
});

module.exports = mongoose.model("clinic", clinicSchema);
