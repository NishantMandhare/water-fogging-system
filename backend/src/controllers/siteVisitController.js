const prisma = require("../prismaClient");

const getAllSiteVisits = async (req, res) => {
    const siteVisits = await prisma.siteVisit.findMany({
        include: { inquiry: { include: { customer: true } } },
    });
    res.json(siteVisits);
};

const createSiteVisit = async (req, res) => {
    const {
        visitDate,
        areaSize,
        indoorOutdoor,
        waterSource,
        electricalRequirement,
        numberOfNozzles,
        notes,
        inquiryId,
    } = req.body;

    const newSiteVisit = await prisma.siteVisit.create({
        data: {
            visitDate: new Date(visitDate),
            areaSize,
            indoorOutdoor,
            waterSource,
            electricalRequirement,
            numberOfNozzles: numberOfNozzles ? Number(numberOfNozzles) : null,
            notes,
            inquiryId: Number(inquiryId),
        },
    });

    res.json(newSiteVisit);
};

const updateSiteVisit = async (req, res) => {
    const { id } = req.params;
    const {
        visitDate,
        areaSize,
        indoorOutdoor,
        waterSource,
        electricalRequirement,
        numberOfNozzles,
        notes,
    } = req.body;

    const updatedSiteVisit = await prisma.siteVisit.update({
        where: { id: Number(id) },
        data: {
            visitDate: visitDate ? new Date(visitDate) : undefined,
            areaSize,
            indoorOutdoor,
            waterSource,
            electricalRequirement,
            numberOfNozzles: numberOfNozzles ? Number(numberOfNozzles) : undefined,
            notes,
        },
    });

    res.json(updatedSiteVisit);
};

const deleteSiteVisit = async (req, res) => {
    const { id } = req.params;

    await prisma.siteVisit.delete({
        where: { id: Number(id) },
    });

    res.json({ message: "Site visit deleted successfully" });
};

module.exports = {
    getAllSiteVisits,
    createSiteVisit,
    updateSiteVisit,
    deleteSiteVisit,
};