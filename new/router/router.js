const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/", controller.getAllUser);
router.post("/", controller.getPostKiwi);
router.delete("/:id", controller.deleteKiwi);
router.patch("/:id", controller.patchKiwi);

module.exports = router;
