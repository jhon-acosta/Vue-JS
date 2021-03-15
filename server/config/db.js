const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1); //Stop App
  }
};

module.exports = conectDB;
