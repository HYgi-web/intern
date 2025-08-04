-- CreateTable
CREATE TABLE `Student` (
    `studRollno` VARCHAR(191) NOT NULL,
    `studFname` VARCHAR(191) NOT NULL,
    `studMname` VARCHAR(191) NULL,
    `studLname` VARCHAR(191) NULL,
    `studEmail` VARCHAR(191) NOT NULL,
    `admYear` INTEGER NOT NULL,
    `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
    `studPhone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_studEmail_key`(`studEmail`),
    PRIMARY KEY (`studRollno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomPreferenceInfo` (
    `rollNo` VARCHAR(191) NOT NULL,
    `roomPrf1` ENUM('AC_Triple', 'NonAC_Single', 'NonAC_Double', 'NonAC_Triple') NOT NULL,
    `roomPrf2` ENUM('AC_Triple', 'NonAC_Single', 'NonAC_Double', 'NonAC_Triple') NOT NULL,
    `roomPrf3` ENUM('AC_Triple', 'NonAC_Single', 'NonAC_Double', 'NonAC_Triple') NOT NULL,
    `roomPrf4` ENUM('AC_Triple', 'NonAC_Single', 'NonAC_Double', 'NonAC_Triple') NOT NULL,
    `partner1Roll` VARCHAR(191) NULL,
    `partner1Name` VARCHAR(191) NULL,
    `partner2Roll` VARCHAR(191) NULL,
    `partner2Name` VARCHAR(191) NULL,
    `bldGrp` ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
    `fdChoice` ENUM('Veg', 'NonVeg') NOT NULL,
    `admRegion` ENUM('Delhi', 'OutsideDelhi', 'DASA') NOT NULL,
    `chronicProb` VARCHAR(191) NULL,
    `stayingHostel` ENUM('Yes', 'No') NOT NULL,
    `profilePhoto` LONGBLOB NULL,
    `signature` LONGBLOB NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DelhiRegion` (
    `rollNo` VARCHAR(191) NOT NULL,
    `allotmentPriority` VARCHAR(191) NULL,
    `distDtu` INTEGER NOT NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AcademicDetails` (
    `rollNo` VARCHAR(191) NOT NULL,
    `cgpa` DOUBLE NOT NULL,
    `course` ENUM('Btech', 'Mtech', 'PhD', 'BDesign', 'MDesign', 'MSc', 'MBA', 'IMSC') NOT NULL,
    `backPaper` INTEGER NOT NULL,
    `lastInstitute` VARCHAR(191) NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BankDetails` (
    `rollNo` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NULL,
    `bankHolderName` VARCHAR(191) NULL,
    `accNo` VARCHAR(191) NULL,
    `bankIfsc` VARCHAR(191) NULL,
    `bankBranch` VARCHAR(191) NULL,
    `bankAddress` VARCHAR(191) NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParentDetails` (
    `rollNo` VARCHAR(191) NOT NULL,
    `parentType` ENUM('Father', 'Mother') NOT NULL,
    `parentName` VARCHAR(191) NOT NULL,
    `parentMobno` VARCHAR(191) NOT NULL,
    `parentEmail` VARCHAR(191) NOT NULL,
    `parentOccupation` VARCHAR(191) NULL,
    `parentDesignation` VARCHAR(191) NULL,
    `pOfficeAddr` VARCHAR(191) NULL,
    `pOfficeNo` VARCHAR(191) NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentAddress` (
    `rollNo` VARCHAR(191) NOT NULL,
    `currAddress` VARCHAR(191) NOT NULL,
    `isSameAddr` BOOLEAN NOT NULL,
    `permAddress` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LocalGuardian` (
    `rollNo` VARCHAR(191) NOT NULL,
    `guardianName` VARCHAR(191) NOT NULL,
    `guardianPhno` VARCHAR(191) NOT NULL,
    `guardianEmail` VARCHAR(191) NOT NULL,
    `guardianOccupation` VARCHAR(191) NOT NULL,
    `guardianAddr` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rollNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch` (
    `rollNo` VARCHAR(191) NOT NULL,
    `course` ENUM('AE', 'BT', 'CE', 'CH', 'CO', 'EC', 'EE', 'EL', 'EN', 'EP', 'IT', 'MC', 'ME', 'PE', 'PS', 'SE') NOT NULL,

    PRIMARY KEY (`rollNo`)
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
