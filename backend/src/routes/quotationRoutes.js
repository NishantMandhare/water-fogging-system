const express = require("express");
const router = express.Router();
const { createQuotation, getAllQuotations } = require("../controllers/quotationController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllQuotations);
router.post("/", protect, createQuotation);

module.exports = router;