exports.up = function (knex) {
	return knex.schema.createTable('class_info', (table) => {
		table.increments('class_info_id').primary()
		table.string('class_type')
		table.string('class_level')
		table.string('class_time')
		table.string('class_location')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('class_info')
}
