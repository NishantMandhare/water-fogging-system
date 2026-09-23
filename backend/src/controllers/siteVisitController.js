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

module.exports = { getAllSiteVisits, createSiteVisit };