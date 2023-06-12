const {
  createUser,
  getUser,
  updatingUserHeight,
  updatingUserWeight,
  updatingUserLike,
  updatingUserHeart,
  updatingUserPressure,
  updatingUserBreath,
  updatingUserTemp,
} = require("../service");

const addUser = async (req, res, next) => {
  try {
    const user = req.body;
    const response = await createUser(user);

    res.status(201).json({
      status: "success",
      code: 201,
      data: { user: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const getUserByEmail = async (req, res, next) => {
  const { email } = req.params;
  console.log(email);
  try {
    const response = await getUser(email);
    if (response) {
      res.json({
        status: "success",
        code: 200,
        data: { user: response },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found contact id: ${email}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const updateUserHeight = async (req, res, next) => {
  try {
    const { email } = req.params;
    const height = req.body;

    const response = await updatingUserHeight(email, height);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserWeight = async (req, res, next) => {
  try {
    const { email } = req.params;
    const weight = req.body;

    const response = await updatingUserWeight(email, weight);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserAge = async (req, res, next) => {
  try {
    const { email } = req.params;
    const age = req.body;

    const response = await updatingUserWeight(email, age);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserLike = async (req, res, next) => {
  try {
    const { email } = req.params;
    const like = req.body;

    const response = await updatingUserLike(email, like);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserHeart = async (req, res, next) => {
  try {
    const { email } = req.params;
    const heart = req.body;

    const response = await updatingUserHeart(email, heart);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserPressure = async (req, res, next) => {
  try {
    const { email } = req.params;
    const pressure = req.body;

    const response = await updatingUserPressure(email, pressure);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserBreath = async (req, res, next) => {
  try {
    const { email } = req.params;
    const breath = req.body;

    const response = await updatingUserBreath(email, breath);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const updateUserTemp = async (req, res, next) => {
  try {
    const { email } = req.params;
    const temp = req.body;

    const response = await updatingUserTemp(email, temp);
    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: response },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

const addUserSleep = async (req, res, next) => {
  try {
    const { email } = req.params;
    const { sleepDuration, date, timeGo, timeGot, durationHours } = req.body;

    const user = await getUser(email);

    user.sleeps.unshift({
      sleepDuration,
      date,
      timeGo,
      timeGot,
      durationHours,
    });
    user.save();

    res.status(200).json({
      status: "updated",
      code: 200,
      data: { message: user.sleeps },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      code: 400,
      data: { message: e.message },
    });
    next(e);
  }
};

module.exports = {
  addUser,
  getUserByEmail,
  updateUserHeight,
  updateUserWeight,
  updateUserAge,
  updateUserLike,
  updateUserHeart,
  updateUserPressure,
  updateUserBreath,
  updateUserTemp,
  addUserSleep,
};
