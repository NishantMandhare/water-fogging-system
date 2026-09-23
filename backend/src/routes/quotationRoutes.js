const express = require("express");
const router = express.Router();
const { createQuotation } = require("../controllers/quotationController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createQuotation);

module.exports = router;