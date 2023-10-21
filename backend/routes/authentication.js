const { Router } = require("express");
const {
  getConnectionId,
  verifyConnection,
} = require("../controllers/connectionController");

const router = Router();

router.get("/", getConnectionId);
router.post("/verify", verifyConnection);

module.exports = router;
