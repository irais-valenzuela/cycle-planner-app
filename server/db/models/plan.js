const db = require("../db.js");
const { DataTypes } = require("sequelize");

const Plan = db.define("Plan", {
  phase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  personalDevelopment: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  fitness: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  diet: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

module.exports = Plan
