const { DataTypes } = require("sequelize");
const sequelize = require("../database/data.connection");

//how to set the characters length into STRING(length)

const student = sequelize.define("students", {
	id: {
		type: DataTypes.INTEGER(),
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isAlpha: true,
		},
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isAlpha: true,
		},
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
		},
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	is_email_verified: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	mobile: {
		type: DataTypes.INTEGER({ length: 10 }),
		allowNull: true,
		validate: {
			isNumeric: true,
		},
	},
	gender: {
		type: DataTypes.ENUM,
		values: ["male", "female"],
		allowNull: true,
	},
	dob: {
		type: DataTypes.DATEONLY(),
		allowNull: false,
	},
	dp: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
});

module.exports = student;
