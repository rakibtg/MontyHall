const {
  random,
  montyHallGame,
  play,
  montyHallSimulator,
} = require("../../simulators/montyHall");

test("Random function generates a random number", () => {
  const val = random();
  expect(val).toBeLessThan(3);
  expect(val).toBeGreaterThanOrEqual(0);
});

test("Play a single round of Monty Hall game with door switch", () => {
  const result = montyHallGame(true);
  expect([true, false].includes(result)).toEqual(true);
});

test("Play a single round of Monty Hall game without switching the door", () => {
  const result = montyHallGame(false);
  expect([true, false].includes(result)).toEqual(true);
});

test("Simulate the game for number of times with door switch", () => {
  const result = play(10, true);
  expect(typeof result).toEqual("number");
});

test("Simulate the game for number of times without switching door", () => {
  const result = play(10, false);
  expect(typeof result).toEqual("number");
});

test("Simulate the game and return the result with door switch", () => {
  const result = montyHallSimulator(10, true);
  expect(typeof result).toEqual("number");
});

test("Simulate the game and return the result without switching the door", () => {
  const result = montyHallSimulator(10, false);
  expect(typeof result).toEqual("number");
});
