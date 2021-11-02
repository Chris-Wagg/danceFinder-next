exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('event_info')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('event_info').insert([
				{
					event_info_id: 1,
					event_name: 'eventJeff',
					event_date: '21 Jan 2021',
					event_time: '3:00pm',
					event_location: "Jeff's house",
					event_misc_info: 'This is info about the event'
				},
				{
					event_info_id: 2,
					event_name: 'eventSteve',
					event_date: '22 Jan 2021',
					event_time: '4:00pm',
					event_location: "Steve's house",
					event_misc_info: 'This is info about the event'
				},
				{
					event_info_id: 3,
					event_name: 'eventAlan',
					event_date: '23 Jan 2021',
					event_time: '5:00pm',
					event_location: "Alan's house",
					event_misc_info: 'This is info about the event'
				}
			])
		})
}
