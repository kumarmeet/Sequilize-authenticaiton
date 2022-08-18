const express = require("express");
// const passport = require("passport");
const router = express.Router();
// require("../auth/auth");

const studentController = require("../controllers/student.controller");

router.get(
	"/list",
	// passport.authenticate("jwt", { session: false }),
	studentController.getUser
);

module.exports = router;
