const express = require("express");
const customerRoutes = require("./src/routes/customerRoutes");
const authRoutes = require("./src/routes/authRoutes");
const inquiryRoutes = require("./src/routes/inquiryRoutes");
const siteVisitRoutes = require("./src/routes/siteVisitRoutes");
const productRoutes = require("./src/routes/productRoutes");
const quotationRoutes = require("./src/routes/quotationRoutes");
const invoiceRoutes = require("./src/routes/invoiceRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 5000;

app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/sitevisits", siteVisitRoutes);
app.use("/api/products", productRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});