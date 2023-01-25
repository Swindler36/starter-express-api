const { faker } = require("@faker-js/faker");

module.exports = () => {
  const data = [];

  for (let i = 0; i < 30; i++) {
    let price = faker.datatype.float({ min: 5, max: 25 });
    let category = faker.helpers.arrayElement([
      "dog_walking",
      "dog_sitter",
      "buy_package",
    ]);
    data.push({
      id: i + 1,
      userId: faker.helpers.arrayElement([1, 2, 3, 4]),
      basket_id: faker.datatype.uuid(),
      price,
      paid_price: price,
      installment: 1,
      basket_items: [
        {
          id: i + 1,
          name: faker.internet.userName(),
          category1: category,
          itemType: "VIRTUAL",
          price: price,
        },
      ],
      status: faker.datatype.number({ min: 1, max: 2 }),
      response: null,
      payment_type: category,
      job: null,
      created_at: faker.date.recent(7),
    });
  }
  return data;
};
