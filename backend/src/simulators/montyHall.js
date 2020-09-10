/**
 * Returns a random number.
 *
 */
const random = () => Math.floor(Math.random() * 3);

/**
 * Play a single round of Monty Hall game.
 *
 * @param {boolean} switchDoor If user should switch the door or not.
 * @return {boolean} If the user has won a car or not.
 */
const _montyHallGame = (switchDoor = false) => {
  const doors = [1, 2, 3];
  const guestSelectedDoor = random();
  const prizeDoor = random();
  const hostOpenedDoor = doors.find(
    (door) => door !== guestSelectedDoor && door !== prizeDoor
  );
  const guestFinalSelection = switchDoor
    ? doors.find(
        (door) => door !== guestSelectedDoor && door !== hostOpenedDoor
      )
    : guestSelectedDoor;
  return prizeDoor === guestFinalSelection;
};

/**
 * Simulate the game for number of times.
 *
 * @param {number} iterations Total number of games to play.
 * @param {boolean} switchDoor If user should switch the door or not.
 * @return {number} Winning chance
 */
const _play = (iterations, switchDoor = false) => {
  let totalWon = 0;
  for (let i = 0; i < iterations; i++) _montyHallGame(switchDoor) && totalWon++;
  const winningChance = ((totalWon / iterations) * 100).toFixed(2);
  return parseFloat(winningChance);
};

/**
 * Simulate the game and return the result.
 *
 * @param {number} simulations Total number of games to play.
 * @param {boolean} switchDoor If user should switch the door or not.
 * @return {number} Winning chance
 */
const montyHallSimulator = (simulations = 1, switchDoor = false) => {
  return _play(simulations, switchDoor);
};

module.exports = montyHallSimulator;
