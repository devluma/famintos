exports.up = async (knex) => {
  await knex.schema.createTable('voting_records', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.integer('user_id').notNullable().unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.string('restaurant_id').notNullable().unsigned();
    table.foreign('restaurant_id').references('id').inTable('restaurants');
    table.integer('attempts').notNullable().defaultTo(1);
    table.enu('day_week', [7, 1, 2, 3, 4, 5, 6]).notNullable();
    table
      .enu('week_day_name', [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ])
      .notNullable();
    table.datetime('last_day_of_likes').notNullable().defaultTo(knex.fn.now());
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('voting_records');
};
