const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateschema = new Schema({
  statename: {
    type: String,
  },
});

module.exports = mongoose.model("state", stateschema);
