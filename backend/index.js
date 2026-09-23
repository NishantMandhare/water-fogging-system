const express = require("express");
const customerRoutes = require("./src/routes/customerRoutes");
const authRoutes = require("./src/routes/authRoutes");
const inquiryRoutes = require("./src/routes/inquiryRoutes");

const app = express();

app.use(express.json());

const PORT = 5000;

app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/inquiries", inquiryRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});