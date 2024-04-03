// backend/config/mysql.js

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Usuário do MySQL
  password: "root", // Senha do MySQL
  database: "crud_clientes", // Nome do banco de dados MySQL
  port: 3307, // Porta do banco de dados MySQL
});

module.exports = connection;
