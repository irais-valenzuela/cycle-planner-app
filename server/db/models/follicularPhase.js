const db = require("../db");
const { DataTypes } = require("sequelize");

const FollicularPhaseSuggestions = db.define("FollicularPhaseSuggestions", {
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
    Day1ThroughDay3: DataTypes.ARRAY(DataTypes.STRING),
    Day4ThroughDay7: DataTypes.ARRAY(DataTypes.STRING),
    Day8ThroughDay10: DataTypes.ARRAY(DataTypes.STRING),
    disclaimer: DataTypes.TEXT,
  }),
  personalDevelopment: DataTypes.JSONB({
    careerDevelopment: DataTypes.STRING,
    selfCare: DataTypes.STRING,
    disclaimer: DataTypes.TEXT,
  }),
});

module.exports = FollicularPhaseSuggestions
