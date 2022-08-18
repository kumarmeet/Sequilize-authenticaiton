const student = require("../model/Student");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const signup = async (req, res) => {
	delete req.user.password;
	return await res.status(200).json({ user: req.user });
};

const login = async (req, res, next) => {
	passport.authenticate("login", (err, user, info) => {
		try {
			if (err || !user) {
				const error = new Error("An error occurred.");
				return next(error);
			}

			req.login(user, { session: false }, async (error) => {
				if (error) return next(error);
				const body = { id: user.id, email: user.email, name: user.first_name };
				const token = jwt.sign({ user: body }, "TOP_SECRET", {
					expiresIn: "5m",
				});

				return res.status(200).json({ token, name: user.first_name });
			});
		} catch (error) {
			return next(error);
		}
	})(req, res, next);
};

const getUser = async (req, res) => {
	await student
		.findAll({
			attributes: [
				"id",
				"first_name",
				"last_name",
				"email",
				"dob",
				"dp",
				"is_email_verified",
				"mobile",
				"status",
				"gender",
			],
		})
		.then((response) => {
			res.status(200).json({ message: "Successfully logged in", response });
		})
		.catch((error) => console.log(error));
};

module.exports = {
	signup,
	login,
	getUser,
};
