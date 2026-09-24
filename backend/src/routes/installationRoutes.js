const express = require("express");
const router = express.Router();
const {
    getAllInstallations,
    createInstallation,
    updateInstallationStatus,
} = require("../controllers/installationController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllInstallations);
router.post("/", protect, createInstallation);
router.patch("/:id/status", protect, updateInstallationStatus);

module.exports = router;