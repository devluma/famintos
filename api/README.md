# API da Aplicação Famintos #

## 🔖 Procedimentos de Instalação e Execução

### Tecnologias Utilizadas:

A `API da aplicação famintos` foi desenvolvida utilizando o `Nodejs`, `Express`, `Nodemon`, `JWT`, `Knex`, `Sqlite` e a possíbilidade de utilizar banco de dados `Postgres`, o projeto foi desenvolvido utilizando a IDE VSCode no Windows 10 utilizando plugins como `ESLint`, `Prettier` e `Airbnb snippers`.

Segue abaixo os procedimentos de instalação e ambiente de desenvolvimento:

**Critério de Instalação**
- 💿 **NodeJS ->** [Instalação](https://nodejs.org/).
- 💿 **Yarn ->** [Instalação](https://yarnpkg.com/getting-started/install).
- 💿 **Libs JavaScript ->** Rodar um `yarn` ou `yarn install` no diretório `api` do projeto `famintos` e aguardar a instalação.

**Configurações de Ambiente do Projeto**
- 💡 **ENV ->** Copiar o arquivo `.env.example` para `.env` e ajustas as vàriaves de ambiente `NODE_ENV` e `PORT` conforme sua preferência ou usar o padrão `localhost na porta 5000`.
- 💡 **Config DB ->** No arquivo `knexfile.js` no diretório `api` do projeto `famintos`, tem as configurações dos apontamento de cada `storage`, é só apontar para o de sua preferência alterando a váriavel de ambiente `NODE_ENV` no `.env` e adicionar os dados de conexão.
- 💡 **Rotas Insomnia ->** No diretório `api` do projeto `famintos`, existe um arquivo com as configurações do [Insomnia](https://insomnia.rest/) que foi utilizado para montar as rotas da `api`.
- 💡 **Docker ->** No diretório raiz do projeto `famintos`, existe uma pasta docker com `scripts` para executar um containner do `docker` caso desejar substituir o `sqlite` por `postgres` ou `mongodb`.

**Critério da Depuração e Execução**
- 💻 **Testes ->** Rodar um `yarn test` no diretório `api` do projeto `famintos`.
- 💻 **Desenvolvimento ->** Rodar um `yarn dev:server` no diretório `api` do projeto `famintos`.
- 💻 **Migrations ->** Rodar um `yarn knex:migrations` no diretório `api` do projeto `famintos`.
- 💻 **Seeds ->** Rodar um `yarn knex:seed` no diretório `api` do projeto `famintos`.
- 💻 **Rollbacks ->** Rodar um `yarn knex:rollback` no diretório `api` do projeto `famintos`.

**Url de Acesso da API**
- [API](http://localhost:5000/api/).

😉 Obrigado por me proporcionar este desafio! <br />
🌈 Espero ansiosamente pelo seu feedback! <br />

## 📜 Direitos e Licença

✌ Este projeto está sobre Direitos / Licença (MIT License) e foi criado por [Luiz Marcelo Schmitt](https://github.com/devluma/) 💙 para o Teste de Dev da DBServer 🚀

---

Copyright 2021 Luiz Marcelo Schmitt.
