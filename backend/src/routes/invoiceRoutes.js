const express = require("express");
const router = express.Router();
const { getAllInvoices, createInvoice } = require("../controllers/invoiceController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllInvoices);
router.post("/", protect, createInvoice);

module.exports = router;
