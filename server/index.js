const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./src/config/database");

const app = express();

app.set("Port", 4000);
app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

//Routes
app.use("/api/", require("./src/routes/test.route"));

app.listen(app.get("Port"), () => {
  console.log(`Running on PORT`, app.get("Port"));
});
