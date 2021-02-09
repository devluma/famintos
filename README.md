# TESTE DEV DBSERVER #

## 🚀 Introdução

Os times da **DBserver** enfrentam um grande problema. Como eles são muito
democráticos, todos os dias eles gastam 30 minutos decidindo onde eles irão
almoçar.

Vamos fazer um pequeno sistema que auxilie essa tomada de decisão!

**Instruções:**

- Não precisa implementar o banco de dados, você pode retornar dados fakes. ✔️
- Todas as estórias devem ser implementadas com um nível aceitável de testes automatizados. ❌
- Nos mande o link para o zip do código, pode ser via DropBox ou algo do gênero. ❌
- Crie um readme que inclua:
  - *Requisitos de ambiente necessários para compilar e rodar o software* ✔️
  - *Instruções de como utilizar o sistema* ✔️
  - [O que vale destacar no código implementado?](#Considerações) 📌
  - [O que poderia ser feito para melhorar o sistema?](#Considerações) 📌
  - [Algo a mais que você tenha a dizer](#Considerações) 📌

## 🔖 Estórias

### Estória 1:

Eu como **profissional faminto;** <br />
Quero **votar no meu restaurante favorito;** <br />
Para que **eu consiga democraticamente levar meus colegas a comer onde eu gosto.**

- **Critério de Aceitação**
- ✔️ Um profissional só pode votar em um restaurante por dia. 

### Estória 2:

Eu como **facilitador do processo de votação;** <br />
Quero **que um restaurante não possa ser repetido durante a semana;** <br />
Para que **não precise ouvir reclamações infinitas!.**

- **Critério de Aceitação**
- ❌ O mesmo restaurante não pode ser escolhido mais de uma vez durante a semana.

### Estória 3:

Eu como **profissional faminto;** <br />
Quero **saber antes do meio dia qual foi o restaurante escolhido;** <br />
Para que **eu possa me despir de preconceitos e preparar o psicológico.**

- **Critério de Aceitação**
- ✔️ Mostrar de alguma forma o resultado da votação.

## 💻 Tecnologias utilizadas no Projeto

O projeto foi criado utilizando as seguintes tecnologias: `NodeJS`, `ReactJS`, `Typescript`,  `Styled-components` e `Postgres`, como Storage no ambiente de desenvolvimento e testes foi utilizado o `Sqlite`. E para rodar os testes da aplicação foi utilizado o `Jest` com o `Supertest`.

Segue abaixo as principais tecnologias utilizadas neste projeto:

- JavaScript ✔️
- HTML/CSS ✔️
- NodeJS ✔️
- ReactJS ✔️
- React-hooks ✔️
- React-components ✔️
- Styled-components ✔️
- Typescript ✔️
- JWT Auth ✔️
- Jest/Supertest ✔️
- KnexJS Query Builder ✔️
- Sqlite ✔️
- Postgres ✔️

## Considerações

- **O que vale destacar no código implementado?**
  - A implementação da interface da apliacação utilizando typescript e Styled-components;
  - A separação da API de consulta do APP;
  - A implementação do mecanismo de autenticação utilizando JWT;
  - A possibilidade de implementação de DevOps com o docker;
  - A implementação das camada de consulta com o database utilizando um query builder;
  - A implementação de migrations e seeds para facilitar a criação da estrutura de storage;
  - A implementação de testes tanto na API como na interface do APP.
- **O que poderia ser feito para melhorar o sistema?**
  - Melhorar os Styled-components separando eles em componentes;
  - Melhorar a responsividade da aplicação utilizando @media no CSS;
  - Melhorar o DevOps do docker utilizando um manager como o Docker Compose ou Kubernetes separando por serviços;
  - Melhorar os gráficos de exibição dos registros;
  - Refatorar as Controllers da API e separar as consultas em Models/Entities;
  - Criar script de build e deploy na API;
  - Adicionar mais casos de testes na Aplicação;
  - Adicionar uma páginação na lista de restaurantes;
  - Ajustar a lógica de votação do ganhador, hoje ela só pega a maior pontuação e não cobsidera os empates.
- **Algo a mais que você tenha a dizer!**
  - Implementei algumas funcionalidades a mais no teste, como a separação das camadas da API e APP, possibilidade de utilizar um database, e também implementei o APP utilizando Typescript para demonstrar habilidades utilizando tanto javascript e typescript no desenvolvimento de Aplicações Web.
  
😉 Obrigado por me proporcionar este desafio! <br />
🌈 Espero ansiosamente pelo seu feedback! <br />

## 📜 Direitos e Licença

✌ Este projeto está sobre Direitos / Licença (MIT License) e foi criado por [Luiz Marcelo Schmitt](https://github.com/devluma/) 💙 para o Teste de Dev da DBServer 🚀

---

Copyright 2021 Luiz Marcelo Schmitt.