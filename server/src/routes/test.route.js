const { Router } = require("express");
const route = Router();
const TestController = require("../controllers/test.controller");

route.get("/", TestController.getData);
route.post("/", TestController.postData);
route.put("/", TestController.updateData);
route.delete("/", TestController.deleteData);

module.exports = route;
