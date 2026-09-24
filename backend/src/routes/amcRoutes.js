
const express = require("express");
const router = express.Router();
const { getAllAMCs, createAMC, incrementServiceCount } = require("../controllers/amcController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllAMCs);
router.post("/", protect, createAMC);
router.patch("/:id/increment-service", protect, incrementServiceCount);

module.exports = router;