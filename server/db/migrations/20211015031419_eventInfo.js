exports.up = function (knex) {
	return knex.schema.createTable('eventInfo', (table) => {
    table.increment('eventInfoId').primary()
    table.string('eventName')
    table.string('eventDate')
    table.string('eventTime')
    table.string('eventLocation')
    table.string('eventMiscInfo')
  })
}

exports.down = function (knex) {
	return knex.schema.dropTable('eventInfo')
}
