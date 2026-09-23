const express = require("express");
const router = express.Router();
const {
  getAllSiteVisits,
  createSiteVisit,
  updateSiteVisit,
  deleteSiteVisit,
} = require("../controllers/siteVisitController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllSiteVisits);
router.post("/", protect, createSiteVisit);
router.put("/:id", protect, updateSiteVisit);
router.delete("/:id", protect, deleteSiteVisit);

module.exports = router;