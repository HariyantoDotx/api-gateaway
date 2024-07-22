const express = require("express")

const addressController = require("../controller/address")

const router = express.Router()
router.post("/", addressController.create)
router.put("/:id", addressController.update)

module.exports = router