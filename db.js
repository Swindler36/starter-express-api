const calendars = require("./db/calendars");
const doctors = require("./db/doctor");
const jobs = require("./db/job");
const payments = require("./db/payment");
const pets = require("./db/pet");
const rooms = require("./db/room");
const submissions = require("./db/submission");
const users = require("./db/user");
const userMetas = require("./db/userMeta");
const userReviews = require("./db/userReview");
const messages = require("./db/message");

module.exports = () => {
  const data = {
    users: users(),
    userMetas: userMetas(),
    pets: pets(),
    jobs: jobs(),
    calendars: calendars(),
    payment: payments(),
    userReviews: userReviews(),
    doctors: doctors(),
    rooms: rooms(),
    submissions: submissions(),
    messages: messages(),
  };

  return data;
};
