const { Sequelize } = require('sequelize');

// Configure as informações da conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'postgres', // Indique o banco de dados que você está usando
    host: 'localhost',   // Host do banco de dados
    port: 5432,          // Porta do banco de dados
    database: 'sarkar', // Nome da base de dados
    username: 'postgres',   // Nome de usuário do banco
    password: 'Mpfo1944',     // Senha do banco
});

// Testar a conexão
async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    }
}

connect();

module.exports = sequelize;
