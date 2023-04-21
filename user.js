const Sequelize= require('sequelize');

const sequelize = require('../util/database');

const User =sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name:{
        type: Sequelize.STRING, 
        allownull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = User