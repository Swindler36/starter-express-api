const { faker } = require('@faker-js/faker');

module.exports = () => {
	const data = [];

	for (let i = 0; i < 30; i++) {
		data.push({
			id: i + 1,
			userId: i + 1,
			name: `${faker.name.firstName()} ${faker.name.lastName()}`,
			hospital: faker.address.secondaryAddress(),
			number: faker.phone.number('+90 5## ### ## ##'),
			address: faker.address.streetAddress(true),
			created_at: faker.date.recent(21),
		});
	}
	return data;
};
