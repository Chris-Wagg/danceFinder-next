exports.up = function (knex) {
	return knex.schema.createTable('user_event_info_join_table', (table) => {
		table.increments('id').primary()
		table.integer('user_id')
		table.integer('event_info_id')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('user_event_info_join_table')
}
