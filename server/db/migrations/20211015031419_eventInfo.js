exports.up = function (knex) {
	return knex.schema.createTable('event_info', (table) => {
    table.increments('event_info_id').primary()
    table.string('event_name')
    table.string('event_date')
    table.string('event_time')
    table.string('event_location')
    table.string('event_misc_info')
  })
}

exports.down = function (knex) {
	return knex.schema.dropTable('event_info')
}
