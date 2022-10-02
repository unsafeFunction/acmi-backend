-- CreateEnum
CREATE TYPE "PRODUCT_TYPE" AS ENUM ('CREAM', 'TONIC', 'SERUM', 'MASK', 'GEL', 'FOAM', 'PEELING', 'CUSTOM');

-- CreateEnum
CREATE TYPE "CARE_TYPE" AS ENUM ('MORNING', 'EVENING', 'CUSTOM');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Care" (
    "id" UUID NOT NULL,
    "type" "CARE_TYPE" NOT NULL DEFAULT 'MORNING',
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Care_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CareStep_id_order_key" ON "CareStep"("id", "order");

-- AddForeignKey
ALTER TABLE "Care" ADD CONSTRAINT "Care_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareStep" ADD CONSTRAINT "CareStep_care_id_fkey" FOREIGN KEY ("care_id") REFERENCES "Care"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
