const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	username: "root",
	database: "study",
	host: "localhost",
	password: "",
	dialect: "mysql",
});

module.exports = sequelize;
