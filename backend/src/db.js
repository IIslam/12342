const { database, user, password, host, DATABASE_URL } = process.env;
const Sequelize = require("sequelize");

const db = new Sequelize(DATABASE_URL);

module.exports = db;
