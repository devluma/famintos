const generateHash = require('../../utils/generateHash');

exports.seed = async (knex) => {
  const password = generateHash('@123456');

  // Deletes ALL existing entries
  await knex('users')
    .del()
    .then(async () => {
      // Inserts seed entries
      await knex('users').insert([
        { id: 1, name: 'Gerente', email: 'gerente@teste.com.br', password },
        { id: 2, name: 'Desenvolvedor', email: 'dev@teste.com.br', password },
      ]);
    });
};
