const prisma = require("../prismaClient");

const getAllServiceTickets = async (req, res) => {
    const tickets = await prisma.serviceTicket.findMany({
        include: {
            customer: true,
            technician: { select: { id: true, name: true, email: true } },
        },
    });
    res.json(tickets);
};

const createServiceTicket = async (req, res) => {
    const { type, priority, description, customerId, technicianId } = req.body;

    const newTicket = await prisma.serviceTicket.create({
        data: {
            type,
            priority,
            description,
            customerId: Number(customerId),
            technicianId: technicianId ? Number(technicianId) : null,
        },
        include: {
            customer: true,
            technician: { select: { id: true, name: true, email: true } },
        },
    });

    res.json(newTicket);
};

const updateServiceTicketStatus = async (req, res) => {
    const { id } = req.params;
    const { status, resolution, materialsUsed, technicianId } = req.body;

    const updatedTicket = await prisma.serviceTicket.update({
        where: { id: Number(id) },
        data: {
            status,
            resolution,
            materialsUsed,
            technicianId: technicianId ? Number(technicianId) : undefined,
            resolvedAt: status === "RESOLVED" ? new Date() : undefined,
        },
    });

    res.json(updatedTicket);
};

module.exports = { getAllServiceTickets, createServiceTicket, updateServiceTicketStatus };