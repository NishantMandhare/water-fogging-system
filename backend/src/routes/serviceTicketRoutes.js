const express = require("express");
const router = express.Router();
const {
    getAllServiceTickets,
    createServiceTicket,
    updateServiceTicketStatus,
} = require("../controllers/serviceTicketController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllServiceTickets);
router.post("/", protect, createServiceTicket);
router.patch("/:id/status", protect, updateServiceTicketStatus);

module.exports = router;