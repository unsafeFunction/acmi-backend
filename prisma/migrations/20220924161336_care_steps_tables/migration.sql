/*
  Warnings:

  - You are about to drop the `Routine` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PRODUCT_TYPE" AS ENUM ('CREAM', 'TONIC', 'SERUM', 'MASK', 'GEL', 'FOAM', 'PEELING', 'CUSTOM');

-- AlterEnum
ALTER TYPE "CARE_TYPE" ADD VALUE 'CUSTOM';

-- DropTable
DROP TABLE "Routine";

-- CreateTable
CREATE TABLE "CareStep" (
    "id" UUID NOT NULL,
    "type" "PRODUCT_TYPE" NOT NULL,
    "care_id" UUID NOT NULL,
    "product_name" VARCHAR(100) NOT NULL,
    "custom_type" VARCHAR(40) NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "days_to_use" TEXT NOT NULL,

    CONSTRAINT "CareStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CareStep_id_order_key" ON "CareStep"("id", "order");

-- AddForeignKey
ALTER TABLE "CareStep" ADD CONSTRAINT "CareStep_care_id_fkey" FOREIGN KEY ("care_id") REFERENCES "Care"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
