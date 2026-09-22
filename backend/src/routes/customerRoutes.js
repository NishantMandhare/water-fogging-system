const express = require("express");
const router = express.Router();
const {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} = require("../controllers/customerController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllCustomers);
router.post("/", protect, createCustomer);
router.put("/:id", protect, updateCustomer);
router.delete("/:id", protect, deleteCustomer);

module.exports = router;