const {Sequelize} = require('sequelize');
const config = require('../config/config.database');

const env = process.env.NODE_ENV || 'development';
const database_url = config[env].url;
const poolConfig = config.dbPool[env];

const sequelize = new Sequelize(database_url, {logging: false, pool: poolConfig});

module.exports = sequelize;
