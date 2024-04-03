// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Rotas para manipulação de usuários
router.post("/", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser); // Aqui está a correção
router.delete("/:id", UserController.deleteUser);

module.exports = router;
