const express = require("express");
const sequelize = require("./database/data.connection");

const app = express();

const port = 8080;

const studentRoutes = require("./routes/student.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/student", studentRoutes);

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
