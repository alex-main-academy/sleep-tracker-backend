const User = require("./schemas/users");

const getUser = (email) => {
  return User.findOne({ email: email });
};

const createUser = ({ name, email }) => {
  return User.create({ name, email });
};

const addingUserSleep = ({ email, sleep }) => {
  return User.updateOne({ email: email }, sleep, { upsert: false });
};

const updatingUserWeight = (email, weight) => {
  return User.updateOne({ email: email }, weight, { upsert: false });
};

const updatingUserAge = (email, age) => {
  return User.updateOne({ email: email }, age, { upsert: false });
};

const updatingUserHeight = (email, height) => {
  return User.updateOne({ email: email }, height, { upsert: false });
};

const updatingUserLike = (email, like) => {
  return User.updateOne({ email: email }, like, { upsert: false });
};

const updatingUserHeart = (email, heart) => {
  return User.updateOne({ email: email }, heart, { upsert: false });
};

const updatingUserPressure = (email, pressure) => {
  return User.updateOne({ email: email }, pressure, { upsert: false });
};

const updatingUserBreath = (email, breath) => {
  return User.updateOne({ email: email }, breath, { upsert: false });
};

const updatingUserTemp = (email, temp) => {
  return User.updateOne({ email: email }, temp, { upsert: false });
};

module.exports = {
  updatingUserHeight,
  updatingUserLike,
  createUser,
  getUser,
  updatingUserWeight,
  updatingUserAge,
  updatingUserHeart,
  updatingUserPressure,
  updatingUserBreath,
  updatingUserTemp,
  addingUserSleep,
};
