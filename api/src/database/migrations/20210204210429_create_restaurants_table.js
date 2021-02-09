exports.up = async (knex) => {
  await knex.schema.createTable('restaurants', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name', 80).unique().notNullable();
    table.string('description', 120).defaultTo('Este restaurante ainda não recebeu like');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('restaurants');
};
