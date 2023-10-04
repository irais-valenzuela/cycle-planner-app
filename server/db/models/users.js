const db = require("../db.js");
const { DataTypes } = require("sequelize");

// we can think more about what else we want to add but for now just this

const User = db.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /^(\+\d{1,2}\s?)?(\d{10})$/, 
        msg: "Please enter a valid phone number.",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 10], 
        msg: "Password must be between 8 and 10 characters long.",
      },
    },
  },
  lastPeriodStartDate: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isDateFormatted(value) {
        if (!moment(value, "MM/DD/YYYY", true).isValid()) {
          throw new Error(
            "Please enter a valid date in the format MM/DD/YYYY."
          );
        }
      },
    },
  },
  dietaryRestrictions: {
    type: DataTypes.ARRAY,
  },
  getNotified: {
    type: DataTypes.BOOLEAN,
  },
  currentPhase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
