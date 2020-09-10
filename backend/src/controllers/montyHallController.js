const montyHallSimulator = require("../simulators/montyHall");

/**
 * Perform given number of simulations to calculate the final winning chance.
 *
 * @param {object} req The request object.
 * @param {object} res The response object.
 * @return {object} A response containing winning chance.
 */
const index = async (req, res) => {
  const { total_simulations, switch_door } = req.query;

  const totalSimulations = Number(total_simulations);
  const switchDoor = switch_door === "true";

  if (isNaN(totalSimulations)) {
    return res.status(500).json({
      success: false,
    });
  }

  return res.json({
    data: montyHallSimulator(totalSimulations, switchDoor),
    success: true,
  });
};

module.exports = {
  index,
};
