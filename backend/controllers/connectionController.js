const crypto = require("crypto");
const { tokenSign, verifyToken } = require("../helpers/generateToken");
module.exports.getConnectionId = async (req, res) => {
  const connectionId = crypto.randomBytes(16).toString("hex");
  try {
    const tokenSession = tokenSign(connectionId);
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
module.exports.verifyConnection = async (req, res) => {
  try {
    const { token } = req.body;
    const tokenData = await verifyToken(token);
    if (!tokenData) {
      res.status(401);
      res.send({
        isAuthorized: false,
        msg: "No autorizado",
      });
      return;
    }
    res.status(200);
    res.send({
      msg: "Autorizado",
      isAuthorized: true,
    });
  } catch (error) {
    res.status(404);
    res.send({
      msg: "Ocurrio un error inesperado al verificar el token.",
      error: error,
    });
  }
};
