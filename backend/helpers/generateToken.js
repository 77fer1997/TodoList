const jwt = require("jsonwebtoken");

const tokenSign = (connectionId) => {
  const token = jwt.sign({ connectionId }, process.env.SECRET_KEY || "123456", {
    expiresIn: "2h",
  });
  return token;
};

module.exports = tokenSign;
