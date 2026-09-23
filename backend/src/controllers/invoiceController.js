const prisma = require("../prismaClient");

const getAllInvoices = async (req, res) => {
  const invoices = await prisma.invoice.findMany({
    include: { items: { include: { product: true } }, customer: true },
  });
  res.json(invoices);
};

const createInvoice = async (req, res) => {
  const { invoiceNo, customerId, discount, gstPercent, notes, items } = req.body;

  const newInvoice = await prisma.invoice.create({
    data: {
      invoiceNo,
      customerId: Number(customerId),
      discount: discount ? Number(discount) : 0,
      gstPercent: gstPercent ? Number(gstPercent) : 18,
      notes,
      items: {
        create: items.map((item) => ({
          productId: Number(item.productId),
          quantity: Number(item.quantity),
          rate: Number(item.rate),
        })),
      },
    },
    include: { items: { include: { product: true } }, customer: true },
  });

  res.json(newInvoice);
};

module.exports = { getAllInvoices, createInvoice };