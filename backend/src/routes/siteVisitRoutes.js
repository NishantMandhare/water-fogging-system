const express = require("express");
const router = express.Router();
const { getAllSiteVisits, createSiteVisit } = require("../controllers/siteVisitController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllSiteVisits);
router.post("/", protect, createSiteVisit);

module.exports = router;