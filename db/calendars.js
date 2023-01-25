const { faker } = require("@faker-js/faker");

const createSelectedDate = (job_type) => {
  return {
    day: String(faker.datatype.number({ max: 30 })),
    month: String(faker.datatype.number({ max: 11 })),
    year: "2022",
    start_time: String(faker.datatype.number({ max: 13, min: 10 })) + ":00",
    end_time: String(faker.datatype.number({ max: 18, min: 13 })) + ":00",
    dogs: [],
    job_type,
    end_date: "null",
  };
};

module.exports = () => {
  const data = [];

  for (let i = 0; i < 30; i++) {
    const job_type = faker.helpers.arrayElement([1, 2]);
    data.push({
      id: i + 1,
      selected_dates: Array(10)
        .fill(1)
        .map(() => createSelectedDate(job_type)),
      user: i + 1,
      job_type,
      address_type: null,
      pet_variation: null,
      description: null,
    });
  }

  return data;
};
