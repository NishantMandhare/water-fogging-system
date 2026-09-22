const prisma = require("../prismaClient");

const getAllCustomers = async (req, res) => {
    const customers = await prisma.customer.findMany();
    res.json(customers);
};

module.exports = { getAllCustomers };