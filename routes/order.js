const express = require("express")

const paymentController = require("../controller/payment")

const router = express.Router()
router.post("/", paymentController.create)
router.get("/", paymentController.getAll)
router.get("/:id", paymentController.get)
router.put("/:id", paymentController.update)

module.exports = router