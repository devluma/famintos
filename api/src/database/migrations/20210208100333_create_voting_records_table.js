exports.up = async (knex) => {
  await knex.schema.createTable('voting_records', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('user_id').notNullable().unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.string('restaurant_id').notNullable().unsigned();
    table.foreign('restaurant_id').references('id').inTable('restaurants');
    table.integer('attempts').notNullable().defaultTo(0);
    table.integer('dayWeek').defaultTo();
    table.string('weekDayName').defaultTo();
    table.integer('workDay').defaultTo();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('voting_records');
};
