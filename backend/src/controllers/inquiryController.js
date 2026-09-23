const prisma = require("../prismaClient");

const getAllInquiries = async (req, res) => {
  const inquiries = await prisma.inquiry.findMany({
    include: { customer: true },
  });
  res.json(inquiries);
};

const createInquiry = async (req, res) => {
  const { requirement, area, location, budget, source, customerId } = req.body;

  const newInquiry = await prisma.inquiry.create({
    data: {
      requirement,
      area,
      location,
      budget,
      source,
      customerId: Number(customerId),
    },
  });

  res.json(newInquiry);
};

module.exports = { getAllInquiries, createInquiry };