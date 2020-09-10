const request = require("supertest");
const { app } = require("../app");

test("Should simulate a monty hall problem with door switched", async () => {
  const res = await request(app).get(
    "/api/montyhall?total_simulations=100&switch_door=true"
  );
  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty("data");
  expect(res.body).toHaveProperty("success");
});

test("Should simulate a monty hall problem without door switched", async () => {
  const res = await request(app).get(
    "/api/montyhall?total_simulations=100&switch_door=false"
  );
  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty("data");
  expect(res.body).toHaveProperty("success");
});
