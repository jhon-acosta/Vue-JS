const { Router } = require("express");

//Controllers
const userController = require("../controllers/UserController");

const router = Router();

//Routes
router.get("/users", userController.getUser);
router.get("/user/:id", userController.getOnlyUser);
router.post("/user", userController.postUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
