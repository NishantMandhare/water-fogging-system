const express = require("express");
const router = express.Router();
const { getAllInquiries, createInquiry } = require("../controllers/inquiryController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllInquiries);
router.post("/", protect, createInquiry);

module.exports = router;