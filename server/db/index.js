// make associations here!
const User =  require("./models/users")
const Plan = require("./models/plan")
const MenstrualPhase = require("./models/menstrualPhase")
const FollicularPhase = require("./models/follicularPhase")

module.exports = {
  User,
  Plan, 
  MenstrualPhase, 
  FollicularPhase
}

User.hasOne(Plan)
Plan.belongsTo(User)