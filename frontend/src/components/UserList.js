import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  // Função para atualizar um usuário
  const updateUser = async (id) => {
    try {
      // Redireciona para a página de edição com o ID do usuário como parâmetro
      history.push(`/edit-user/${id}`);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };


  // Função para deletar um usuário
  const deleteUser = async (id) => {
    try {
      // Implemente a lógica para deletar o usuário aqui
      console.log("Deletar usuário com ID:", id);
      // Por exemplo, você pode enviar uma requisição DELETE para o backend
      // com o ID do usuário a ser deletado
      // Aguardando a implementação da API no backend
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <Link to="/add-user">
        <button> + Adicionar Usuário</button>
      </Link>{" "}
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
