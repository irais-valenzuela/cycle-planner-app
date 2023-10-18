// make associations here!
const User =  require("./models/users")
const Plan = require("./models/plan")
const MenstrualPhaseSuggestions = require("./models/menstrualPhase")
const FollicularPhaseSuggestions = require("./models/follicularPhase")

module.exports = {
  User,
  Plan, 
  MenstrualPhaseSuggestions, 
  FollicularPhaseSuggestions
}

User.hasOne(Plan)
Plan.belongsTo(User)