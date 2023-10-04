const db = require("../db.js")
const { DataTypes } = require('sequelize')

// we can think more about what else we want to add but for now just this

const User = db.define("User", {
  name: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true
    }
  }
})

module.exports = User