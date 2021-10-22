exports.up = function (knex) {
	return knex.schema.createTable('userStudioInfoJoinTable', (table) => {
    table.increment('id').primary()
    .refernces('userInfoId')
    .refernces('studioInfoId')
  })
}

exports.down = function (knex) {
	return knex.schema.dropTable('userStudioInfoJoinTable')
}
