const express = require("express");
const customerRoutes = require("./src/routes/customerRoutes");

const app = express();

const PORT = 5000;

app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});