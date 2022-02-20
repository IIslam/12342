const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");
const Fund = require("./fund");

User = db.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName: "user",
    timestamps: false,
  }
);

User.hasMany(Fund, { as: "Funds", foreignKey: "userEmail" });

module.exports = User;
