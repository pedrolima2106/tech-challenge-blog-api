const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco com sucesso 🚀');

    await sequelize.sync(); // 🔥 cria a tabela automaticamente
    console.log('Modelos sincronizados');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a API:', error);
  }
})();
