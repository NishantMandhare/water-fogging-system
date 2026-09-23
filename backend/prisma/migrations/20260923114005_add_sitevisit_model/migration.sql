-- CreateTable
CREATE TABLE "SiteVisit" (
    "id" SERIAL NOT NULL,
    "visitDate" TIMESTAMP(3) NOT NULL,
    "areaSize" TEXT,
    "indoorOutdoor" TEXT,
    "waterSource" TEXT,
    "electricalRequirement" TEXT,
    "numberOfNozzles" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inquiryId" INTEGER NOT NULL,

    CONSTRAINT "SiteVisit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SiteVisit" ADD CONSTRAINT "SiteVisit_inquiryId_fkey" FOREIGN KEY ("inquiryId") REFERENCES "Inquiry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
