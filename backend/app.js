const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");
const cors = require("cors"); // Importe o pacote cors

const app = express();

// Middleware para analisar corpos de requisição JSON
app.use(bodyParser.json());

// Middleware para permitir solicitações de diferentes origens
app.use(cors());

// Rotas para manipulação de usuários
app.use("/users", userRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erro interno do servidor" });
});

// Sincroniza o Sequelize com o banco de dados
sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados conectado e sincronizado");
    // Iniciar o servidor
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Servidor Express está ouvindo na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
