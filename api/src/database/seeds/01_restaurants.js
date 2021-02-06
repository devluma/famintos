exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('restaurants')
    .del()
    .then(async () => {
      // Inserts seed entries
      await knex('restaurants').insert([
        { id: 1, name: 'Restaurante do Galego' },
        { id: 2, name: 'Restaurante Mais Você' },
        { id: 3, name: 'Restaurante da PUC' },
        { id: 4, name: 'Lancheria do Seu Zé' },
        { id: 5, name: 'Lancheria Dona Maria' },
        { id: 6, name: 'Ifood Xis Cavanhas' },
        { id: 7, name: 'Ifood Prato Feito' },
        { id: 8, name: 'Pizza' },
      ]);
    });
};
