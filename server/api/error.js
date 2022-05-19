module.exports = function handler(rea, res) {
  res.status(404).send({
    successes: false,
    message: "沒有這個頁面",
  });
};
