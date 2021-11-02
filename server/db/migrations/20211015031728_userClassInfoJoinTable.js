exports.up = function (knex) {
	return knex.schema.createTable('user_class_info_join_table', (table) => {
		table.increments('id').primary()
		table.integer('user_id')
		table.integer('class_info_id')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('user_class_info_join_table')
}
