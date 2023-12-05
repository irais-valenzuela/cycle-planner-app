// make associations here!
const User =  require("./models/users")
const Plan = require("./models/plan")
const MenstrualPhaseSuggestions = require("./models/menstrualPhase")
const FollicularPhaseSuggestions = require("./models/follicularPhase")
const OvulatoryPhaseSuggestions = require("./models/ovulatoryPhase")

module.exports = {
  User,
  Plan, 
  MenstrualPhaseSuggestions, 
  FollicularPhaseSuggestions, 
  OvulatoryPhaseSuggestions
}

User.hasOne(Plan)
Plan.belongsTo(User)