-- CreateTable
CREATE TABLE "AMC" (
    "id" SERIAL NOT NULL,
    "contractAmount" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalServices" INTEGER NOT NULL,
    "servicesCompleted" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "AMC_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AMC" ADD CONSTRAINT "AMC_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
