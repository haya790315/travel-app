module.exports = async function handler(req, res) {
  new Promise(function (resolve, reject) {
    resolve({ successes: true, message: "this is working" });
  }).then((data) => res.send(data));
};
