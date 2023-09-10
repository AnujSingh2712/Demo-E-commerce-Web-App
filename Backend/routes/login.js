const router = require("express").Router()
const controller = require("../controller/login")

router.post("/register",controller.user)
router.post("/login",controller.login)

module.exports = router