const { faker } = require('@faker-js/faker');

module.exports = () => {
	const data = [];

	for (let i = 0; i < 30; i++) {
		data.push({
			id: i + 1,
			job: i + 1,
			userId: i + 1,
			status: faker.helpers.arrayElement([
				'reject',
				'pending',
				'approve',
				'pending_payment',
			]),
			is_finished: faker.datatype.boolean(),
		});
	}
	return data;
};
