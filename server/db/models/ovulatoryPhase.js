const db = require("../db.js");
const { DataTypes } = require("sequelize");

const OvulatoryPhaseSuggestions = db.define("OvulatoryPhaseSuggestion", {
  foods: DataTypes.JSONB({
    vegetables: DataTypes.ARRAY(DataTypes.STRING),
    fruits: DataTypes.ARRAY(DataTypes.STRING),
    proteins: DataTypes.ARRAY(DataTypes.STRING),
    dietaryRestrictionProteins: DataTypes.ARRAY(DataTypes.STRING),
    grains: DataTypes.ARRAY(DataTypes.STRING),
    nuts: DataTypes.ARRAY(DataTypes.STRING),
    other: DataTypes.ARRAY(DataTypes.STRING),
    disclaimer: DataTypes.TEXT,
  }),
  fitness: DataTypes.JSONB({
    Day1ThroughDay4: DataTypes.ARRAY(DataTypes.STRING),
    disclaimer: DataTypes.TEXT,
  }),
  personalDevelopment: DataTypes.JSONB({
    careerDevelopment: DataTypes.STRING,
    selfCare: DataTypes.STRING,
    disclaimer: DataTypes.TEXT,
  }),
});

module.exports = OvulatoryPhaseSuggestions