const prisma = require("../prismaClient");

const getAllQuotations = async (req, res) => {
    const quotations = await prisma.quotation.findMany({
        include: { items: { include: { product: true } }, customer: true },
    });
    res.json(quotations);
};

const createQuotation = async (req, res) => {
    const { quotationNo, customerId, discount, gstPercent, notes, validUntil, items } = req.body;

    const newQuotation = await prisma.quotation.create({
        data: {
            quotationNo,
            customerId: Number(customerId),
            discount: discount ? Number(discount) : 0,
            gstPercent: gstPercent ? Number(gstPercent) : 18,
            notes,
            validUntil: validUntil ? new Date(validUntil) : null,
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

    res.json(newQuotation);
};

module.exports = { createQuotation, getAllQuotations };