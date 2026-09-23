const express = require("express");
const router = express.Router();
const {
    getAllInquiries,
    createInquiry,
    updateInquiryStatus,
} = require("../controllers/inquiryController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllInquiries);
router.post("/", protect, createInquiry);
router.patch("/:id/status", protect, updateInquiryStatus);

module.exports = router;