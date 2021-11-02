exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('user_info')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('user_info').insert([
				{
					user_info_id: 1,
					name: 'Jeff',
					user_name: 'userJeff',
					email_address: 'emailJeff@address.com',
					avatar: 'avatar.url'
				},
				{
					user_info_id: 2,
					name: 'Steve',
					user_name: 'userSteve',
					email_address: 'emailSteve@address.com',
					avatar: 'avatar.url'
				},
				{
					user_info_id: 3,
					name: 'Alan',
					user_name: 'userAlan',
					email_address: 'emailAlan@address.com',
					avatar: 'avatar.url'
				}
			])
		})
}
