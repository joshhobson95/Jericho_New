const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')



module.exports = {
    QuillTable : sequelize.define('quilltable', {
        quilltableid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        content: DataTypes.TEXT,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })
}
