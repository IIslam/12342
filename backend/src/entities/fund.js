const { DataTypes } = require("sequelize");
const db = require("../db");

const FundFinancial = require("./fund-financial");

Fund = db.define(
  "fund",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    userEmail: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName: "fund",
    timestamps: false,
  }
);

Fund.hasMany(FundFinancial, { as: "Financials", foreignKey: "fundId" });

module.exports = Fund;
