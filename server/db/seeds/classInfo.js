exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('class_info')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('class_info').insert([
				{
					class_info_id: 1,
					class_type: 'Jazz',
					class_level: 'intro 1',
					class_day: 'Monday',
					class_time: '4:00pm',
					class_location: 'Jazz dance and drama center'
				},
				{
					class_info_id: 2,
					class_type: 'Tap',
					class_level: 'Level 6',
					class_day: 'Tueday',
					class_time: '4:00pm',
					class_location: 'Jazz dance and drama center'
				},
				{
					class_info_id: 3,
					class_type: 'Lyrical',
					class_level: 'Advanced 1',
					class_day: 'Wednesday',
					class_time: '6:00pm',
					class_location: 'Jazz dance and drama center'
				}
			])
		})
}
