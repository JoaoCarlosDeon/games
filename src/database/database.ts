const Sequelize = require('sequelize')
// import { Dialect, Sequelize } from 'sequelize'

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: 0,
    timezone: '-03:00',
    define: {
        timestamp: true,
        underscored: true
    }
} )




module.exports = connection
