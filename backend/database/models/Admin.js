const { DataTypes } = require('sequelize');

const sequelize = require('../../config');

module.exports = sequelize.define(
    "admin",
    {
        entity_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    },
    {
        freezeTableName: true,
    },
);
