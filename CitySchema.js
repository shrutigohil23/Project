const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cityschema = new Schema({
  cityname: {
    type: String,
  },
  stateid: {
    type: Schema.Types.ObjectId,
    ref: "state",
  },
});

module.exports = mongoose.model("city", cityschema);
