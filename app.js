const express = require("express");
const sequelize = require("./database/data.connection");
const passport = require("passport");
require("./auth/auth");

const app = express();

const port = 8080;

const studentRoutes = require("./routes/student.routes");
const authRoutes = require("./routes/auth.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/student", authRoutes);

app.use(passport.authenticate("jwt", { session: false }));
app.use("/student", studentRoutes);

app.use((req, res) => {
	res.status(404).render("404");
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
