const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  addrs: String,
  posted: {
    type: Date,
    default: Date.now,
  },
});

const linklists = mongoose.model("linklist", userSchema);
module.exports = linklists;
