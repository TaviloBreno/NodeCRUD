// backend/app.js

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para análise de corpo
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Usuário do MySQL
  password: "root", // Senha do MySQL
  database: "crud_clientes", // Nome do banco de dados MySQL
  port: 3307, // Porta do banco de dados MySQL
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados MySQL:", err);
    return;
  }
  console.log("Conexão com o banco de dados MySQL estabelecida com sucesso");
});

// Rotas
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Middleware de tratamento de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado!");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express está ouvindo na porta ${PORT}`);
});
