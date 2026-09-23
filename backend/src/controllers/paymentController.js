const prisma = require("../prismaClient");

const createPayment = async (req, res) => {
  const { invoiceId, amount, method, reference, notes } = req.body;

  const result = await prisma.$transaction(async (tx) => {
    const payment = await tx.payment.create({
      data: {
        invoiceId: Number(invoiceId),
        amount: Number(amount),
        method,
        reference,
        notes,
      },
    });

    const updatedInvoice = await tx.invoice.update({
      where: { id: Number(invoiceId) },
      data: {
        paidAmount: { increment: Number(amount) },
      },
    });

    return { payment, updatedInvoice };
  });

  res.json(result);
};

module.exports = { createPayment };