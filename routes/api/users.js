const express = require("express");
const {
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
} = require("../../models/users");
const router = express.Router();

router.get("/:email", getUserByEmail);
router.post("/", addUser);
router.put("/:email/height", updateUserHeight);
router.put("/:email/weight", updateUserWeight);
router.put("/:email/age", updateUserAge);
router.put("/:email/like", updateUserLike);
router.put("/:email/heart", updateUserHeart);
router.put("/:email/pressure", updateUserPressure);
router.put("/:email/breath", updateUserBreath);
router.put("/:email/temp", updateUserTemp);
router.post("/:email/sleep", addUserSleep);

module.exports = router;
