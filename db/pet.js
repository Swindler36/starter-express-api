const { faker } = require('@faker-js/faker');

module.exports = () => {
	const data = [];

	for (let i = 0; i < 30; i++) {
		data.push({
			id: i + 1,
			owner: i + 1,
			name: faker.name.firstName(),
			variation: faker.lorem.word(),
			description: faker.lorem.lines(1),
			image: faker.internet.avatar(),
			old: faker.datatype.number({ min: 1, max: 7 }),
			weight: faker.datatype.number({ min: 1, max: 55 }),
			sex: faker.helpers.arrayElement(['male', 'female']),
		});
	}
	return data;
};
