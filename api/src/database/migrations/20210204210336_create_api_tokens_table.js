exports.up = async (knex) => {
  await knex.schema.createTable('api_tokens', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('user_id').notNullable().unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.string('name', 44).notNullable();
    table.string('type').notNullable();
    table.string('token').notNullable();
    table.timestamp('expires_at').defaultTo(knex.fn.now());
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('api_tokens');
};
