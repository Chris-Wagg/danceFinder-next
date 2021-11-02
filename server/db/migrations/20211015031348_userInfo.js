exports.up = function (knex) {
	return knex.schema.createTable('user_info', (table) => {
		table.increments('user_info_id').primary()
		table.string('name')
		table.string('user_name')
		table.string('email_address')
		table.string('avatar')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('user_info')
}
