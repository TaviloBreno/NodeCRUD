import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa o Link para a navegação
import "./UserList.css"; // Importa o arquivo CSS para estilização

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Função para obter a lista de usuários
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    // Chama a função para obter os usuários ao montar o componente
    fetchUsers();
  }, []); // O array vazio [] como segundo parâmetro indica que o efeito só será executado uma vez, após a montagem do componente

  // Função para atualizar um usuário
  const updateUser = (id) => {
    console.log("Atualizar usuário com ID:", id);
    // Implemente a lógica para atualizar o usuário aqui
  };

  // Função para deletar um usuário
  const deleteUser = (id) => {
    console.log("Deletar usuário com ID:", id);
    // Implemente a lógica para deletar o usuário aqui
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <Link to="/add-user">Adicionar Usuário</Link>{" "}
      {/* Adiciona o link para a página de adicionar usuários */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => updateUser(user.id)}>Atualizar</button>
                <button onClick={() => deleteUser(user.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
