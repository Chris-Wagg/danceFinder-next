exports.up = function (knex) {
	return knex.schema.createTable('classInfo', (table) => {
		table.increment('classInfoId').primary()
		table.string('className')
		table.string('classType')
		table.string('classLevel')
		table.string('classTime')
		table.string('classLocation')
		table.string('classMiscInfo')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('classInfo')
}
