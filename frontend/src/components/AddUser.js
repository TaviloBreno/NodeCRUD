import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./AddUser.css"; // Importa o arquivo CSS para estilização

const AddUser = () => {
  // State para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  // State para controlar o redirecionamento
  const [redirectToList, setRedirectToList] = useState(false);

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar os dados do formulário para a URL de criação de usuários
      await axios.post("http://localhost:8080/users", formData);
      // Limpar o estado do formulário após o envio bem-sucedido
      setFormData({ name: "", email: "", age: "" });
      // Redirecionar para a lista de usuários
      setRedirectToList(true);
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      alert("Erro ao adicionar usuário. Verifique o console para mais informações.");
    }
  };

  return (
    <div>
      {redirectToList && <Redirect to="/" />}
      <h2 className="add-user-title">Adicionar Novo Usuário</h2>
      <form className="add-user-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="age">Idade:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Usuário</button>
      </form>
    </div>
  );
};

export default AddUser;
