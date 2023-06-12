require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3000;
const uriDb = process.env.uriDb;

mongoose
  .connect(uriDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, function () {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
