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
const User = require("../../service/schemas/users");
const multer = require("multer");
const path = require("path");
const { getUser } = require("../../service");
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

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post(
  "/:email/upload-avatar",
  upload.single("avatar"),
  async (req, res) => {
    const { email } = req.params;
    try {
      const user = await getUser(email);
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      await user.changeAvatar(req.file.filename);

      return res.status(200).json({ message: "Avatar updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
