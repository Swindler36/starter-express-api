const { faker } = require('@faker-js/faker');

module.exports = () => {
	const data = [];

	for (let i = 0; i < 30; i++) {
		data.push({
			id: i + 1,
			userId: i + 1,
			photo: {
			document: faker.internet.avatar(),},
			credit_amount: 0,
			tel_number: faker.phone.number('+90 5## ### ## ##'),
			app_version: '1.0.0',
			is_disabled: false,
			email_verified: true,
			address: {
				city: faker.address.city(),
				country: faker.address.country(),
				detail: faker.address.secondaryAddress(),
			},
			user_status: faker.helpers.arrayElement(['dog_sitter', 'dog_owner']),
			wallet_amount: 0,
			birthday: faker.date.birthdate(),
			description: faker.lorem.lines(1),
		   review_count: faker.datatype.number(100),
		    review_average: faker.datatype.float({ precision: 0.1,max: 5,min:0 }),
		    sitting_price: 50.0,
		    walking_price: 30.0
		});
	}

	return data;
};
