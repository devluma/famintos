exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name', 120).notNullable();
    table.string('email', 100).notNullable();
    table.string('password').notNullable();
    table.integer('attempts').notNullable().defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users');
};
