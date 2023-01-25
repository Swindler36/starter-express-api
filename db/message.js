const { faker } = require("@faker-js/faker");

module.exports = () => {
  const data = [];

  for (let i = 0; i < 150; i++) {
    let user = faker.datatype.number({ min: 1, max: 5 });
    data.push({
      id: i + 1,
      user,
      room: faker.datatype.number({ min: 1, max: 20 }),
      message: {
        id: i + 1,
        type: "text_message",
        owner: faker.helpers.arrayElement(["me", "not"]),
        data: faker.lorem.sentence(),
        time: faker.date.soon(7),
      },
    });
  }
  return data;
};
