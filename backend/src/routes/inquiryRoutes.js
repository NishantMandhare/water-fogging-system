const express = require("express");
const router = express.Router();
const {
    getAllInquiries,
    createInquiry,
    updateInquiryStatus,
    updateInquiry,
    deleteInquiry,
} = require("../controllers/inquiryController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllInquiries);
router.post("/", protect, createInquiry);
router.patch("/:id/status", protect, updateInquiryStatus);
router.put("/:id", protect, updateInquiry);
router.delete("/:id", protect, deleteInquiry);

module.exports = router;