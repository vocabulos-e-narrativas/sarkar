const { DataTypes } = require('sequelize');
const sequelize = require('../../config.js'); // Suponha que você tenha um arquivo para configurar a conexão com o banco de dados
const Users = require('../models/Users'); // Importe o modelo Users

const Events = sequelize.define(
    "events",
    {
        event_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

// Defina a associação com a tabela Users usando o email como chave estrangeira
Events.belongsTo(Users, {
    foreignKey: 'email',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = Events;