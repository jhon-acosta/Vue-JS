const express = require("express");
const conectDB = require("./config/db");
const routes = require("./routes/routes");

const app = express();

conectDB();

app.use(express.json());

app.use("/api", routes);

app.listen(4000, () => {
  console.log(`Serve on PORT 4000`);
});
