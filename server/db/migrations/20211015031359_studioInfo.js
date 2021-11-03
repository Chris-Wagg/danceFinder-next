exports.up = function (knex) {
	return knex.schema.createTable('studio_info', (table) => {
		table.increments('studio_info_id').primary()
		table.string('studio_name')
		table.string('studio_address')
		table.string('studio_email')
		table.string('studio_phone')
		table.string('class_types_offered')
		table.string('school_age_levels_offered')
		table.string('adult_levels_offered')
		table.string('open_classes_offered')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('studio_info')
}
