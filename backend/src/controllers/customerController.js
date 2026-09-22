const prisma = require("../prismaClient");

const getAllCustomers = async (req, res) => {
    const customers = await prisma.customer.findMany();
    res.json(customers);
};

const createCustomer = async (req, res) => {
    const { name, mobile, email, address, city } = req.body;

    const newCustomer = await prisma.customer.create({
        data: { name, mobile, email, address, city },
    });

    res.json(newCustomer);
};

module.exports = { getAllCustomers, createCustomer };