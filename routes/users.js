const express = require('express');
const verifyToken = require("../middleware/verifyToken")
const userController = require ('../controller/user')
const router = express.Router();

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/", verifyToken, userController.get)

module.exports = router;
