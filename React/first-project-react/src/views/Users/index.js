import React, { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  Button,
  User,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get(
        "http://localhost:8000/users/"
      );

      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:8000/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>

      </ContainerItems>
    </Container>
  );
};

export default Users;
