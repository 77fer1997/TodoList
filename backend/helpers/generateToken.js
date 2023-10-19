const jwt = require("jsonwebtoken");

const tokenSign = (connectionId) => {
  const token = jwt.sign({ connectionId }, process.env.SECRET_KEY || "123456", {
    expiresIn: "2h",
  });
  return token;
};
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || "123456");
  } catch (error) {
    return null;
  }
};
module.exports = {
  tokenSign,
  verifyToken,
};
