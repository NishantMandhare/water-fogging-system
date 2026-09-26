const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require("../controllers/authController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/register", protect, authorize("OWNER"), registerUser);
router.post("/login", loginUser);
router.get("/users", protect, getAllUsers);

module.exports = router;