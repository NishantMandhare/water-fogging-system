const prisma = require("../prismaClient");

const getAllAMCs = async (req, res) => {
    const amcs = await prisma.aMC.findMany({
        include: { customer: true },
    });
    res.json(amcs);
};

const createAMC = async (req, res) => {
    const { contractAmount, startDate, endDate, totalServices, customerId, notes } = req.body;

    const newAMC = await prisma.aMC.create({
        data: {
            contractAmount: Number(contractAmount),
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            totalServices: Number(totalServices),
            customerId: Number(customerId),
            notes,
        },
        include: { customer: true },
    });

    res.json(newAMC);
};

const incrementServiceCount = async (req, res) => {
    const { id } = req.params;

    const updatedAMC = await prisma.aMC.update({
        where: { id: Number(id) },
        data: {
            servicesCompleted: { increment: 1 },
        },
    });

    res.json(updatedAMC);
};

module.exports = { getAllAMCs, createAMC, incrementServiceCount };