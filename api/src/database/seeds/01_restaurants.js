exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('restaurants')
    .del()
    .then(async () => {
      // Inserts seed entries
      await knex('restaurants').insert([
        { id: 1, name: 'Restaurante do Galego' },
        { id: 2, name: 'Restaurante da PUC' },
        { id: 3, name: 'Xis Cavanhas' },
        { id: 4, name: 'Ifood Prato Feito' },
        { id: 5, name: 'Pizza' },
        { id: 6, name: 'Massas e Pasteis' },
        { id: 7, name: 'Mark Hamburgueria' },
      ]);
    });
};
