// backend/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const connection = require("../config/mysql");

// Rota para obter todos os usuários
router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Erro ao obter todos os usuários:", error);
      res.status(500).json({ error: "Erro ao obter todos os usuários" });
      return;
    }
    res.json(results);
  });
});

// Outras rotas CRUD para criar, atualizar e excluir usuários

module.exports = router;
