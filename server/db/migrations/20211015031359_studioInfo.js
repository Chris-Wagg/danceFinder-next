exports.up = function (knex) {
	return knex.schema.createTable('studioInfo', (table) => {
    table.increment('studioInfoId').primary()
    table.string('studioName')
    table.string('studioAddress')
    table.string('studioEmail')
    table.string('studioPhone')
    table.string('studioSocials')
    table.string('studioMiscInfo')
  })
}

exports.down = function (knex) {
	return knex.schema.dropTable('')
}
