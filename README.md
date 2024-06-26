# CRUD de Usuários - Node.js e React

🚀 Este é um projeto de CRUD de usuários desenvolvido utilizando Node.js para o backend e React para o frontend.

## Funcionalidades

- Cadastro, leitura, atualização e exclusão de usuários.
- Interface de usuário intuitiva e responsiva.
- Integração com banco de dados MySQL utilizando Sequelize ORM.

## Pré-requisitos

- Node.js e npm instalados globalmente.
- MySQL Server instalado e em execução.
- React instalado globalmente (para execução do frontend).

## Instalação

1. Clone este repositório: [![Clone](https://img.shields.io/badge/GitHub-Clone-green.svg)](https://github.com/TaviloBreno/NodeCRUD.git)
2. Navegue até o diretório do **backend**: `cd backend`
3. Instale as dependências do backend: `npm install`
4. Navegue até o diretório do **frontend**: `cd frontend`
5. Instale as dependências do frontend: `npm install`

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL com o nome `crud_clientes`.
2. Configure as credenciais de acesso ao banco de dados no arquivo `config/database.js`.

## Uso

1. Inicie o servidor **backend**: `npm start` no diretório `backend`.
2. Inicie o servidor **frontend**: `npm start` no diretório `frontend`.
3. Acesse a aplicação no navegador: `http://localhost:3000`.
4. O backend roda na porta: `http://localhost:8080`.

## Rotas do CRUD

- **POST /users**: Adiciona um novo usuário ao banco de dados. Esta rota recebe os dados do usuário a ser adicionado no corpo da requisição.
- **GET /users**: Retorna uma lista de todos os usuários cadastrados no banco de dados.
- **PUT /users/:id**: Atualiza os dados de um usuário existente com o ID especificado. Esta rota recebe os novos dados do usuário no corpo da requisição.
- **DELETE /users/:id**: Deleta um usuário existente com o ID especificado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request. 🤝

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT). 📝
