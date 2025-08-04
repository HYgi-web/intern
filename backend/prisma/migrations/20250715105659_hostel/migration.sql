/*
  Warnings:

  - The primary key for the `academicdetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `academicdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `lastInstitute` on the `academicdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - The primary key for the `bankdetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `bankdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `bankName` on the `bankdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `bankHolderName` on the `bankdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `accNo` on the `bankdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `bankIfsc` on the `bankdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `bankBranch` on the `bankdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - The primary key for the `branch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `branch` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - The primary key for the `delhiregion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `delhiregion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `allotmentPriority` on the `delhiregion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - The primary key for the `localguardian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `localguardian` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `guardianName` on the `localguardian` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `guardianPhno` on the `localguardian` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `guardianEmail` on the `localguardian` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `guardianOccupation` on the `localguardian` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - The primary key for the `parentdetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `parentName` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `parentMobno` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `parentEmail` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `parentOccupation` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `parentDesignation` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `pOfficeNo` on the `parentdetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - The primary key for the `roompreferenceinfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `partner1Name` on the `roompreferenceinfo` table. All the data in the column will be lost.
  - You are about to drop the column `partner1Roll` on the `roompreferenceinfo` table. All the data in the column will be lost.
  - You are about to drop the column `partner2Name` on the `roompreferenceinfo` table. All the data in the column will be lost.
  - You are about to drop the column `partner2Roll` on the `roompreferenceinfo` table. All the data in the column will be lost.
  - You are about to alter the column `rollNo` on the `roompreferenceinfo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - The values [AC_Triple,NonAC_Single,NonAC_Double,NonAC_Triple] on the enum `Hostel_roomType` will be removed. If these variants are still used in the database, this will fail.
  - The values [AC_Triple,NonAC_Single,NonAC_Double,NonAC_Triple] on the enum `Hostel_roomType` will be removed. If these variants are still used in the database, this will fail.
  - The values [AC_Triple,NonAC_Single,NonAC_Double,NonAC_Triple] on the enum `Hostel_roomType` will be removed. If these variants are still used in the database, this will fail.
  - The values [AC_Triple,NonAC_Single,NonAC_Double,NonAC_Triple] on the enum `Hostel_roomType` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `studRollno` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `studFname` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `studMname` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `studLname` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `studEmail` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `studPhone` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - The primary key for the `studentaddress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `rollNo` on the `studentaddress` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.

*/
-- DropForeignKey
ALTER TABLE `academicdetails` DROP FOREIGN KEY `AcademicDetails_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `bankdetails` DROP FOREIGN KEY `BankDetails_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `branch` DROP FOREIGN KEY `Branch_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `delhiregion` DROP FOREIGN KEY `DelhiRegion_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `localguardian` DROP FOREIGN KEY `LocalGuardian_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `parentdetails` DROP FOREIGN KEY `ParentDetails_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `roompreferenceinfo` DROP FOREIGN KEY `RoomPreferenceInfo_rollNo_fkey`;

-- DropForeignKey
ALTER TABLE `studentaddress` DROP FOREIGN KEY `StudentAddress_rollNo_fkey`;

-- AlterTable
ALTER TABLE `academicdetails` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `lastInstitute` VARCHAR(100) NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `bankdetails` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `bankName` VARCHAR(100) NULL,
    MODIFY `bankHolderName` VARCHAR(100) NULL,
    MODIFY `accNo` VARCHAR(20) NULL,
    MODIFY `bankIfsc` VARCHAR(20) NULL,
    MODIFY `bankBranch` VARCHAR(100) NULL,
    MODIFY `bankAddress` VARCHAR(255) NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `branch` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `delhiregion` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `allotmentPriority` VARCHAR(50) NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `localguardian` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `guardianName` VARCHAR(100) NOT NULL,
    MODIFY `guardianPhno` VARCHAR(15) NOT NULL,
    MODIFY `guardianEmail` VARCHAR(100) NOT NULL,
    MODIFY `guardianOccupation` VARCHAR(100) NOT NULL,
    MODIFY `guardianAddr` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `parentdetails` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `parentName` VARCHAR(100) NOT NULL,
    MODIFY `parentMobno` VARCHAR(15) NOT NULL,
    MODIFY `parentEmail` VARCHAR(100) NOT NULL,
    MODIFY `parentOccupation` VARCHAR(100) NULL,
    MODIFY `parentDesignation` VARCHAR(100) NULL,
    MODIFY `pOfficeAddr` VARCHAR(255) NULL,
    MODIFY `pOfficeNo` VARCHAR(15) NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `roompreferenceinfo` DROP PRIMARY KEY,
    DROP COLUMN `partner1Name`,
    DROP COLUMN `partner1Roll`,
    DROP COLUMN `partner2Name`,
    DROP COLUMN `partner2Roll`,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `roomPrf1` ENUM('AC: Triple Seater', 'NON AC: Single Seater', 'NON AC: Double Seater', 'NON AC: Triple Seater') NOT NULL,
    MODIFY `roomPrf2` ENUM('AC: Triple Seater', 'NON AC: Single Seater', 'NON AC: Double Seater', 'NON AC: Triple Seater') NOT NULL,
    MODIFY `roomPrf3` ENUM('AC: Triple Seater', 'NON AC: Single Seater', 'NON AC: Double Seater', 'NON AC: Triple Seater') NOT NULL,
    MODIFY `roomPrf4` ENUM('AC: Triple Seater', 'NON AC: Single Seater', 'NON AC: Double Seater', 'NON AC: Triple Seater') NOT NULL,
    MODIFY `chronicProb` VARCHAR(255) NULL,
    ADD PRIMARY KEY (`rollNo`);

-- AlterTable
ALTER TABLE `student` DROP PRIMARY KEY,
    ADD COLUMN `applicationStatus` ENUM('Draft', 'Submitted', 'UnderReview', 'Approved', 'Rejected', 'Waitlisted') NOT NULL DEFAULT 'Draft',
    ADD COLUMN `submittedAt` DATETIME(3) NULL,
    MODIFY `studRollno` VARCHAR(10) NOT NULL,
    MODIFY `studFname` VARCHAR(50) NOT NULL,
    MODIFY `studMname` VARCHAR(50) NULL,
    MODIFY `studLname` VARCHAR(50) NULL,
    MODIFY `studEmail` VARCHAR(100) NOT NULL,
    MODIFY `studPhone` VARCHAR(15) NOT NULL,
    ADD PRIMARY KEY (`studRollno`);

-- AlterTable
ALTER TABLE `studentaddress` DROP PRIMARY KEY,
    MODIFY `rollNo` VARCHAR(10) NOT NULL,
    MODIFY `currAddress` VARCHAR(255) NOT NULL,
    MODIFY `permAddress` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`rollNo`);

-- CreateTable
CREATE TABLE `Hostel` (
    `id` VARCHAR(10) NOT NULL,
    `hostelName` VARCHAR(100) NOT NULL,
    `wardenName` VARCHAR(100) NOT NULL,
    `asstWarden` VARCHAR(100) NOT NULL,
    `genderType` ENUM('Girls', 'Boys') NOT NULL,
    `roomType` ENUM('AC: Triple Seater', 'NON AC: Single Seater', 'NON AC: Double Seater', 'NON AC: Triple Seater') NOT NULL,

    UNIQUE INDEX `Hostel_hostelName_key`(`hostelName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HostelCapacity` (
    `id` VARCHAR(10) NOT NULL,
    `hostelId` VARCHAR(10) NOT NULL,
    `totalRooms` INTEGER NOT NULL,
    `totalBeds` INTEGER NOT NULL,
    `occupiedBeds` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `HostelCapacity_hostelId_key`(`hostelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` VARCHAR(10) NOT NULL,
    `hostelId` VARCHAR(10) NOT NULL,
    `roomNumber` VARCHAR(10) NOT NULL,
    `student1Id` VARCHAR(10) NULL,
    `student2Id` VARCHAR(10) NULL,
    `student3Id` VARCHAR(10) NULL,
    `currentOccupancy` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Room_student1Id_key`(`student1Id`),
    UNIQUE INDEX `Room_student2Id_key`(`student2Id`),
    UNIQUE INDEX `Room_student3Id_key`(`student3Id`),
    UNIQUE INDEX `Room_hostelId_roomNumber_key`(`hostelId`, `roomNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Allotment` (
    `id` VARCHAR(10) NOT NULL,
    `rollNo` VARCHAR(10) NOT NULL,
    `hostelId` VARCHAR(10) NOT NULL,
    `roomId` VARCHAR(10) NOT NULL,
    `bedNumber` INTEGER NOT NULL,
    `allotDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('Active', 'Provisional', 'Cancelled', 'Completed') NOT NULL DEFAULT 'Active',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomPreferenceInfo` ADD CONSTRAINT `RoomPreferenceInfo_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DelhiRegion` ADD CONSTRAINT `DelhiRegion_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcademicDetails` ADD CONSTRAINT `AcademicDetails_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BankDetails` ADD CONSTRAINT `BankDetails_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParentDetails` ADD CONSTRAINT `ParentDetails_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAddress` ADD CONSTRAINT `StudentAddress_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LocalGuardian` ADD CONSTRAINT `LocalGuardian_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branch` ADD CONSTRAINT `Branch_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HostelCapacity` ADD CONSTRAINT `HostelCapacity_hostelId_fkey` FOREIGN KEY (`hostelId`) REFERENCES `Hostel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_hostelId_fkey` FOREIGN KEY (`hostelId`) REFERENCES `Hostel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_student1Id_fkey` FOREIGN KEY (`student1Id`) REFERENCES `Student`(`studRollno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_student2Id_fkey` FOREIGN KEY (`student2Id`) REFERENCES `Student`(`studRollno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_student3Id_fkey` FOREIGN KEY (`student3Id`) REFERENCES `Student`(`studRollno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Allotment` ADD CONSTRAINT `Allotment_rollNo_fkey` FOREIGN KEY (`rollNo`) REFERENCES `Student`(`studRollno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Allotment` ADD CONSTRAINT `Allotment_hostelId_fkey` FOREIGN KEY (`hostelId`) REFERENCES `Hostel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Allotment` ADD CONSTRAINT `Allotment_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
