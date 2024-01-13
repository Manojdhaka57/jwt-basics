const express = require("express");
const { login, dashboard } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/login", login);
// router.route("/login").post(login);
// router.get("/dashboard", dashboard);
router.route("/dashboard").get(authenticationMiddleware, dashboard);

module.exports = router;
