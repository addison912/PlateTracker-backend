const config = require("../config/config"),
  jwt = require("jsonwebtoken");

module.exports = {
  verify: (req, res) => {
    jwt.verify(res.locals.token, config.jwtSecret, function(err, verify) {
      if (err) {
        console.log(err);
      } else {
        console.log("verified: ", verify);
        return res.json(verify);
      }
    });
  }
};
