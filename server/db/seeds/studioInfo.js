exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('studio_info')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('studio_info').insert([
				{
					studio_info_id: 1,
					studio_name: 'studioJeff',
					studio_address: '69 jeff street, jefftown',
					studio_email: 'emailJeff@emial.com',
					studio_phone: '06696969'
				},
				{
					studio_info_id: 2,
					studio_name: 'studioAlan',
					studio_address: '69 alan street, alantown',
					studio_email: 'emailAlan@emial.com',
					studio_phone: '06696979'
				},
				{
					studio_info_id: 3,
					studio_name: 'studioJeff',
					studio_address: '69 steve street, stevetown',
					studio_email: 'emailSteve@emial.com',
					studio_phone: '06696989'
				}
			])
		})
}
