const { faker } = require("@faker-js/faker");

module.exports = () => {
  const data = [];

  for (let i = 0; i < 150; i++) {
    data.push({
      id: i + 1,
      owner: faker.datatype.number({ min: 1, max: 20 }),
      job_type: faker.datatype.number({ min: 1, max: 2 }),
      user_type: faker.helpers.arrayElement(["dog_sitter", "dog_owner"]),
      address_type: faker.helpers.arrayElement(["my_home", "sitter_home"]),
      address: {
        lat: faker.datatype.number({ max: 30 }),
        lng: faker.datatype.number({ max: 30 }),

        city: faker.address.city(),
        country: faker.address.country(),
        detail: faker.address.secondaryAddress(),
      },
      start_datetime: faker.date.soon(7),
      end_datetime: faker.date.soon(8),
      pet_variation: faker.helpers.arrayElement([
        "small",
        "medium",
        "big",
        "huge",
      ]),
      pet: i + 1,
    });
  }
  return data;
};
