const Sequelize = require('sequelize');

// creates connection to database
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/cycle-tracker-app', {
  logging: true // unless you like the logs
});

module.exports = db;