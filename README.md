# TESTE DEV DBSERVER #

## 🚀 Introdução

Os times da **DBserver** enfrentam um grande problema. Como eles são muito
democráticos, todos os dias eles gastam 30 minutos decidindo onde eles irão
almoçar.

Vamos fazer um pequeno sistema que auxilie essa tomada de decisão!

**Instruções:**

- Não precisa implementar o banco de dados, você pode retornar dados fakes. 
- Todas as estórias devem ser implementadas com um nível aceitável de testes automatizados. 
- Nos mande o link para o zip do código, pode ser via DropBox ou algo do gênero. 
- Crie um readme que inclua:
  - *Requisitos de ambiente necessários para compilar e rodar o software* ✔️
  - *Instruções de como utilizar o sistema* ❌
  - [O que vale destacar no código implementado?](##Considerações) 📌
  - [O que poderia ser feito para melhorar o sistema?](##Considerações) 📌
  - [Algo a mais que você tenha a dizer](##Considerações) 📌

## 🔖 Estórias

### Estória 1:

Eu como **profissional faminto**; <br />
Quero **votar no meu restaurante favorito**; <br />
Para que **eu consiga democraticamente levar meus colegas a comer onde eu gosto**. <br />

- **Critério de Aceitação**
- ❌ Um profissional só pode votar em um restaurante por dia. 

### Estória 2:

Eu como facilitador do processo de votação
Quero que um restaurante não possa ser repetido durante a semana
Para que não precise ouvir reclamações infinitas!

- **Critério de Aceitação**
- ❌ O mesmo restaurante não pode ser escolhido mais de uma vez durante a semana.

### Estória 3:

Eu como profissional faminto
Quero saber antes do meio dia qual foi o restaurante escolhido
Para que eu possa me despir de preconceitos e preparar o psicológico.

- **Critério de Aceitação**
- ❌ Mostrar de alguma forma o resultado da votação.

## 💻 Como usar o Projeto

O projeto foi criado utilizando as seguintes tecnologias: `NodeJS`, `ReactJS`, `Typescript`,  `Styled-components` e `Postgres`. Segue abaixo os comandos para **serem utilizados** ao rodar o `projeto`.

- Gera o pacote com os fontes já compactados em `tar.bz2`

```
yarn build:deploy
```

- Instala as `libs` do `node_modules` em `produção`

```
yarn build:install
```

- Executa o `node` em `produção`

```
yarn prod:server
```

## Considerações

- **O que vale destacar no código implementado?**
  - A implementação de devOps com o docker;
  - A separação da api de consulta do app;
- **O que poderia ser feito para melhorar o sistema?**
  - Adicionar um mecanismo de autenticação como JWT ou OAuth2;
  - Criar script de build e deploy;
- **Algo a mais que você tenha a dizer!**
  - Nada mais tenho a declarar.
  
😉 Obrigado por me proporcionar este desafio! <br />
🌈 Espero ansiosamente pelo seu feedback! <br />

## 📜 Direitos e Licença

✌ Este projeto está sobre Direitos / Licença (MIT License) e foi criado por [Luiz Marcelo Schmitt](https://github.com/devluma/) 💙 para o Teste de Dev da DBServer 🚀

---

Copyright 2021 Luiz Marcelo Schmitt.