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

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, mobile, email, address, city } = req.body;

  const updatedCustomer = await prisma.customer.update({
    where: { id: Number(id) },
    data: { name, mobile, email, address, city },
  });

  res.json(updatedCustomer);
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  await prisma.customer.delete({
    where: { id: Number(id) },
  });

  res.json({ message: "Customer deleted successfully" });
};

module.exports = { getAllCustomers, createCustomer, updateCustomer, deleteCustomer };

