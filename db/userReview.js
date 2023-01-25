const { faker } = require("@faker-js/faker");

const getAnotherRandomNumber = (excluded) => {
  let num = faker.datatype.number({ min: 1, max: 30 });
  if (num === excluded) {
    return getAnotherRandomNumber(excluded);
  }
  return num;
};

module.exports = () => {
  const data = [];

  for (let i = 0; i < 30; i++) {
    data.push({
      id: i + 1,
      userId: i + 1,
      star_number: faker.datatype.number({ min: 1, max: 5 }),
      review: faker.lorem.lines(2),
      review_owner: {
        id: i + 2,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      submission: faker.datatype.number({ min: 1, max: 30 }),
      created_at: faker.date.recent(7),
    });
  }
  return data;
};
