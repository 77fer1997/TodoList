const crypto = require("crypto");
const { tokenSign } = require("../helpers/generateToken");
module.exports.getConnectionId = async (req, res) => {
  const connectionId = crypto.randomBytes(16).toString("hex");
  try {
    const tokenSession = tokenSign(connectionId);
    console.log(tokenSession);
    res.status(200);
    res.send({ token: tokenSession });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error inesperado al obtener el token.",
      error: error,
    });
  }
};
