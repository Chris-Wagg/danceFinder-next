exports.up = function (knex) {
	return knex.schema.createTable('userInfo', (table) => {
		table.increment('userInfoId').primary()
		table.string('name')
		table.string('userName')
		table.string('emailAddress')
		table.string('avatar')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('userInfo')
}
