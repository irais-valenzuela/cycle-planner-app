// make associations here!
const User =  require("./models/users")
const Plan = require("./models/plan")
const MenstrualPhase = require("./models/menstrualPhase")

module.exports = {
  User,
  Plan, 
  MenstrualPhase
}

User.hasOne(Plan)
Plan.belongsTo(User)