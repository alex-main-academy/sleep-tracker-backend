const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  age: {
    type: String,
  },
  like: {
    type: String,
  },
  heart: {
    type: String,
  },
  pressure: {
    type: String,
  },
  breath: {
    type: String,
  },
  temp: {
    type: String,
  },
  sleeps: [
    {
      sleepDuration: String,
      date: String,
      timeGo: String,
      timeGot: String,
      durationHours: String,
    },
  ],
});

const User = mongoose.model("user", user);

module.exports = User;
