exports.up = function (knex) {
	return knex.schema.createTable('', (table) => {
    table.increment('id').primary()
  })
}

exports.down = function (knex) {
	return knex.schema.dropTable('')
}
