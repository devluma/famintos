exports.up = async (knex) => {
  await knex.schema.createTable('restaurants', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('name', 120).notNullable();
    table.integer('attempts').notNullable().defaultTo(0);
    table.string('schedule').defaultTo();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('restaurants');
};
