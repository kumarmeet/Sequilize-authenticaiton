const express = require("express");
const passport = require("passport");
const router = express.Router();
require("../auth/auth");

const sudentController = require("../controllers/student.controller");

router.post(
	"/signup",
	passport.authenticate("signup", { session: false }),
	sudentController.signup
);

router.post(
	"/login",
	passport.authenticate("login", { session: false }),
	sudentController.login
);

router.get(
	"/list",
	passport.authenticate("jwt", { session: false }),
	sudentController.getUser
);

module.exports = router;
