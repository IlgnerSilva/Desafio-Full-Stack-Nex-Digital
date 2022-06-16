Olá, se você recebeu esse teste é porque gostamos do seu perfil, e está a poucos 
passos de fazer parte do nosso time!

Gostaríamos que você participasse desse desafio para que possamos testar suas habilidades técnicas, então bora lá!

# Teste Full-Stack Nex Digital
Este teste busca analisar as capacidades técnicas para a vaga de Desenvolvedor Full-Stack.

## Desafio
Você deverá desenvolver uma aplicação que consiste em: um banco de dados (PostgreSQL), uma API (Node.js + Sequelize.js) e o Front-end (React.js). 

Na aplicação, um usuário deverá se cadastrar utilizando nome, e-mail e senha e se autenticar na 
aplicação utilizando JWT. Já na home, o backend deve retornar para o usuário  uma lista de produtos que apenas um usuário autenticado pode acessar.

## Pré-Requisitos

- Front-End - React.js
- API - Node.js + sequelize.js
- Banco de dados - PostgreSQL

## O que será avaliado

- Organização geral do código
- Padronização de nomes de variáveis/funções
- Performance e segurança do código
- Utilização correta de git

## Diferencial

- Manter o código limpo e em inglês 
- Utilizar princípios SOLID
- Agilidade
- Código maciço com bons tratamentos de erros e bugs

## 💡 Informações de como executar o projeto

  ## - Você pode clonar o repositório inteiro, onde já estão os dois projetos, backend e frontend.

  ### Executar o Backend

```bash

  # Acessar no terminal a pasta onde se encontra o projeto backend

  # rodar o comando npm install

  # Criar o arquivo .env com base no arquivo .env.example incluindo a linha de conexão, ou apenas resmover o example do .env

  # Caso queira testar com um bando de dados local, execute o comando npx sequelize-cli db:migrate. (Não é necessário pois o banco está hospedado).

  ## rodar o comando npm run dev 


```
## Endpoints da API
Endpoint de teste: <code>/auth/user</code> retorna todos os usuário 
Endpoint de teste: <code>/auth/user/searchByEmail/:email</code> retorna um usuário pelo email encontrado 
Endpoint de teste: <code>/auth/user/searchById/:id/</code> retorna um usuário pelo id encontrado 
Endpoint: <code>/auth/user/login/</code> retorna o usuário que fez o login + o token de autorização
{
	"name": "Username",
	"email": "user@gname.com",
	"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1MzU0NzMzLCJleHAiOjE2NTUzNTUzMzN9.H2vEQ6ljvYkGIY6tdfKKEhfwCa1ug_VzcUf9m8WphCk"
}

Endpoint: <code>/auth/user/logout/</code> retorna status 201 e desloga usuário 

Endpoint de teste: <code>/products/searchAllProducts</code> retorna todos os produtos cadastrados 
Endpoint: <code>/products/registerProduct</code> retorna status 201 para o produto cadastrado
{
	"name": "Nome do produto",
	"description": "Sobre o produto",
	"imageURL": "Url da imagem"
}

  ### Executar o Frontend

```bash
  
  # Acessar no terminal a pasta onde se encontra o projeto Frontend

  # rodar o comando npm install

  ## rodar o comando npm start
