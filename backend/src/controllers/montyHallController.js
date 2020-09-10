const index = async (req, res) => {
  return res.json({
    data: "From index",
    success: true,
  });
};

module.exports = {
  index
}