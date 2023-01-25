const { faker } = require('@faker-js/faker');

module.exports = () => {
	const data = [];

	for (let i = 0; i < 30; i++) {
		data.push({
			id: i + 1,
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		});
	}
	return data;
};
