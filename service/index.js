const User = require("./schemas/users");

const getUser = (email) => {
  return User.findOne({ email: email });
};

const createUser = ({ name, email }) => {
  return User.create({ name, email });
};

const addingUserSleep = ({ email, sleep }) => {
  return User.update({ email: email }, sleep, { upsert: false });
};

const updatingUserWeight = (email, weight) => {
  return User.update({ email: email }, weight, { upsert: false });
};

const updatingUserAge = (email, age) => {
  return User.update({ email: email }, age, { upsert: false });
};

const updatingUserHeight = (email, height) => {
  return User.update({ email: email }, height, { upsert: false });
};

const updatingUserLike = (email, like) => {
  return User.update({ email: email }, like, { upsert: false });
};

const updatingUserHeart = (email, heart) => {
  return User.update({ email: email }, heart, { upsert: false });
};

const updatingUserPressure = (email, pressure) => {
  return User.update({ email: email }, pressure, { upsert: false });
};

const updatingUserBreath = (email, breath) => {
  return User.update({ email: email }, breath, { upsert: false });
};

const updatingUserTemp = (email, temp) => {
  return User.update({ email: email }, temp, { upsert: false });
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
