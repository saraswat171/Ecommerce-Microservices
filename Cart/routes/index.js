const express = require('express');
const router = express.Router();
router.use("/", require("./cartRoutes"))
module.exports = router;