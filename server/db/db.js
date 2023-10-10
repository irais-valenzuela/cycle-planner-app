const { Sequelize } = require('sequelize');

// connection to database
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/cycle-planner-app');

module.exports = db;