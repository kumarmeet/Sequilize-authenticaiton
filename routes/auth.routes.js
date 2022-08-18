const express = require("express");
const passport = require("passport");
const router = express.Router();
// require("../auth/auth");

const authController = require("../controllers/auth.controller");

router.post(
	"/signup",
	passport.authenticate("signup", { session: false }),
	authController.signup
);

router.post(
	"/login",
	passport.authenticate("login", { session: false }),
	authController.login
);

module.exports = router;
