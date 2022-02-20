const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

const FundFinancial = db.define(
  "fund_financial",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    fundId: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    tableName: "fund_financial",
    timestamps: false,
  }
);

module.exports = FundFinancial;
