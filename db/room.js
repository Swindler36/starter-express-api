const { faker } = require("@faker-js/faker");

const getAnotherRandomNumber = (excluded) => {
  let num = faker.datatype.number({ min: 1, max: 5 });
  if (num === excluded) {
    return getAnotherRandomNumber(excluded);
  }
  return num;
};

module.exports = () => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    let owner = faker.datatype.number({ min: 1, max: 5 });
    data.push({
      id: i + 1,
      owner,
      receiver: getAnotherRandomNumber(owner),
      submission: i+1
    });
  }
  return data;
};
