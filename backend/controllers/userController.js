// controllers/userController.js

const User = require("../models/userModel");

// Controller para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = await User.create({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Controller para obter todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Controller para obter um usuário por ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao obter usuário por ID:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Controller para atualizar um usuário existente
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    await user.update({ name, email, age });
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Controller para excluir um usuário existente
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    await user.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
