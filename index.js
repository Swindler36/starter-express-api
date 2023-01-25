// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const data = require("./db")();

const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;
server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/auth/login": "/login",
    "/auth/user-meta/": "/userMetas/2?_expand=user",
    "/auth/user-meta/edit/": "/userMetas/2?_expand=user",
    "/auth/user-meta/:id": "/userMetas/:id?_expand=user",
    "/auth/user-reviews/": "/userReviews/?_expand=user",
    "/auth/user-reviews/:id": "/userReviews/:id/?_expand=user",
    "/auth/calendar/": "/calendars/2",
    "/chat/list/": "/rooms/",
    "/pet": "/pets",
    "/pet/:id": "/pets/:id",
    "/submissions/:id":"/submissions/get/:id?_expand=user&_expand=job" 
  })
);

server.post("/login", (req, res) => {
  res.jsonp({
    token: "ca04fdfe1d306d2485df2b8354671fbed37c4b79",
    user_id: 2,
    email: "a@gdx.com",
  });
});

const jobs = data.jobs.map((item) => {
  return {
    ...item,
    owner: {
      ...data.users[item.owner - 1],
    },
  };
});

server.get("/job/search", (req, res) => {
  res.jsonp(jobs.slice(0, 20));
});

server.get("/auth/user-photo/:id", (req, res) => {
  res.jsonp(data.userMetas[Number(req.params.id) - 1]);
});

server.use(router);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
