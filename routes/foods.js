const express = require("express")

const foodController = require("../controller/food")

const router = express.Router()

router.post("/", foodController.create)
router.get("/", foodController.getAll)
router.get("/:id", foodController.get)
router.put("/:id", foodController.update)
router.delete("/:id", foodController.destroy)

module.exports = router