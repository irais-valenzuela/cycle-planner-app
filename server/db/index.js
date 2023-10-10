// make associations here!
const User =  require("./models/users")
const Plan = require("./models/plan")

module.exports = {
  User,
  Plan
}


User.hasOne(Plan)
Plan.belongsTo(User)