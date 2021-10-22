exports.up = function (knex) {
	return knex.schema.createTable('userEventInfoJoinTable', (table) => {
    table.increment('id').primary()
    .references('userInfoId')
			.references('eventInfoId')
  })
}

exports.down = function (knex) {
	return knex.schema.dropTable('userEventInfoJoinTable')
}
