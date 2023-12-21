const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/", controller.getAllUser);

module.exports = router;
