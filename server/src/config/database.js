const mongoose = require("mongoose");

const URI = "mongodb://localhost/test-app";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Database conect sucessfully"))
  .catch((error) => console.log(error));

module.exports = mongoose;
