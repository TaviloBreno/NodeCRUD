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

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(
      `Você tem certeza de que quer deletar ${name}?`
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/users/${id}`);
        setUsers(users.filter((user) => user.id !== id));
        console.log(`Usuário com ID ${id} deletado com sucesso.`);
      } catch (error) {
        console.error(`Erro ao deletar usuário com ID ${id}:`, error);
      }
    }
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <Link to="/add-user">Adicionar Usuário</Link>{" "}
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
                <button onClick={() => history.push(`/edit-user/${user.id}`)}>
                  Editar
                </button>
                <button onClick={() => handleDelete(user.id, user.name)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
