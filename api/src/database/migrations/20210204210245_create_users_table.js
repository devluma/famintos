exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name', 80).notNullable();
    table.string('email', 100).unique().notNullable();
    table.string('password', 44).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users');
};
