## Tech Challenge – Blog API

API REST desenvolvida como projeto individual para o Tech Challenge – Fase 2.
O objetivo é fornecer um backend para um blog educacional, permitindo o cadastro, consulta, atualização e exclusão de posts, com filtros e paginação.

## Tecnologias Utilizadas

Node.js

Express

PostgreSQL

Sequelize (ORM)

dotenv

Nodemon

## Estrutura do Projeto

src/
  config/
    database.js
  controllers/
    postController.js
  models/
    Post.js
  routes/
    postRoutes.js
  services/
    postService.js
  app.js
  server.js

## Configuração do Ambiente

- Clonar o repositório
 git clone https://github.com/seu-usuario/tech-challenge-blog-api.git
 cd tech-challenge-blog-api

## Instalar dependências
 npm install

## Criar arquivo .env
- Na raiz do projeto, crie um arquivo .env com o seguinte conteúdo:

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=blog_db
DB_PORT=5432

PORT=3000

## Criar o banco de dados
- No PostgreSQL, crie o banco:
CREATE DATABASE blog_db;

## Rodar o projeto
npm run dev

 - A API estará disponível em:
   http://localhost:3000

## Testes da API
- Thunder Client

## Rotas da API

- Criar um post
 POST /posts

 {
  "title": "Meu primeiro post",
  "content": "Conteúdo do post",
  "author": "Pedro"
}

## Listar todos os posts
 
 - GET /posts

 ## Buscar posts por título

 GET /posts?title=primeiro

 ## Paginação

 GET /posts?page=1&limit=5

 Exemplo de resposta:
 {
  "total": 10,
  "page": 1,
  "limit": 5,
  "posts": []
}

## Buscar post por ID

- GET /posts/:id

## Atualizar post

- PUT /posts/:id
{
  "title": "Título atualizado",
  "content": "Novo conteúdo"
}

## Deletar post

- DELETE /posts/:id

## Funcionalidades Implementadas

- CRUD completo de posts
- Filtro por título
- Paginação
- Persistência em PostgreSQL
- Arquitetura organizada (MVC + Service)

## Autor
Pedro
Projeto desenvolvido como parte do Tech Challenge – Fase 2

## Considerações Finais
Este projeto demonstra boas práticas no desenvolvimento de APIs REST, uso de ORM, organização de código e integração com banco de dados relacional.
