const { Router } = require("express");
const { getConnectionId } = require("../controllers/connectionController");

const router = Router();

router.get("/", getConnectionId);

module.exports = router;
