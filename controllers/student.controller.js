const student = require("../model/Student");

const getUser = async (req, res) => {
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
			res.status(200).json({ message: "Successfully logged in", response });
		})
		.catch((error) => console.log(error));
};

module.exports = {
	getUser,
};
