exports.up = function (knex) {
	return knex.schema.createTable('userClassInfoJoinTable', (table) => {
		table.increment('id').primary()
			.references('userInfoId')
			.references('classInfoId')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('')
}
