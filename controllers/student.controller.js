const student = require("../model/Student");

const getUser = async (req, res, next) => {
	const param = req.params.userName.toLowerCase();
	const userName = req.user.name.toLowerCase();

	if (param === userName) {
		await student
			.findOne({
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
				where: { id: req.user.id },
			})
			.then((response) => {
				return res
					.status(200)
					.json({ message: "Successfully logged in", response });
			})
			.catch((error) => console.log(error));
		return;
	}

	next(); //it will let go to 404 route in app.js file
	// return res.status(404).json({ message: "User not exists!!" });
};

module.exports = {
	getUser,
};
