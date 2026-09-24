const prisma = require("../prismaClient");

const getAllInstallations = async (req, res) => {
    const installations = await prisma.installation.findMany({
        include: { customer: true, technician: { select: { id: true, name: true, email: true } } },
    });
    res.json(installations);
};

const createInstallation = async (req, res) => {
    const { customerId, technicianId, scheduledDate, notes } = req.body;

    const newInstallation = await prisma.installation.create({
        data: {
            customerId: Number(customerId),
            technicianId: Number(technicianId),
            scheduledDate: scheduledDate ? new Date(scheduledDate) : null,
            notes,
        },
        include: { customer: true, technician: { select: { id: true, name: true, email: true } } },
    });

    res.json(newInstallation);
};

const updateInstallationStatus = async (req, res) => {
    const { id } = req.params;
    const { status, completedDate, materialsUsed, laborCost } = req.body;

    const updatedInstallation = await prisma.installation.update({
        where: { id: Number(id) },
        data: {
            status,
            completedDate: completedDate ? new Date(completedDate) : undefined,
            materialsUsed,
            laborCost: laborCost ? Number(laborCost) : undefined,
        },
    });

    res.json(updatedInstallation);
};

module.exports = { getAllInstallations, createInstallation, updateInstallationStatus };