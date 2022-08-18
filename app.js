const express = require("express");
const sequelize = require("./database/data.connection");
const passport = require("passport");
require("./auth/auth");

const app = express();

const port = process.env.PORT || 8080;

const studentRoutes = require("./routes/student.routes");
const authRoutes = require("./routes/auth.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/student", authRoutes);

app.use(
	"/student",
	passport.authenticate("jwt", { session: false }),
	studentRoutes
);

app.use((req, res) => {
	res.status(404).json({ message: "Resource not found!!" });
});

app.use((error, req, res, next) => {
	return res.status(500).json({ message: "Server side error" });
});

sequelize
	.sync()
	.then(() => {
		app.listen(port, () => {
			console.log("🚀server running on port: " + port);
		});
	})
	.catch((error) => {
		console.log(error);
	});
