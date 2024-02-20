const { DataTypes } = require('sequelize');
const sequelize = require('../../config.js'); // Suponha que você tenha um arquivo para configurar a conexão com o banco de dados

const Users = sequelize.define(
    "users",
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        authorized: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idea_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        resetPasswordExpires: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        authToken: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        diagnosis: {
            type: DataTypes.STRING,
        },
        completed_challenges: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        completed_steps: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        completed_phases: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        completed_achievements: {
            type: DataTypes.INTEGER,
            defaultValue: 0, // Defina o valor padrão desejado
        },
        completed_topics: {
            type: DataTypes.ARRAY(DataTypes.INTEGER), // Defina como um array de inteiros
            defaultValue: [], // Defina um valor padrão como um array vazio
        },
        pitch_form_1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        pitch_form_2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        pitch_form_3: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        pitch_form_4: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        propriedade_form_1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        propriedade_form_2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        propriedade_form_3: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        propriedade_form_4: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },

    },
    {
        freezeTableName: true,
        timestamps: false,
    },
);

module.exports = Users;

// Adicione a associação com a tabela Admin (hasMany ou hasOne) se necessário
