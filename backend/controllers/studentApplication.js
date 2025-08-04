// prisma/studentApplication.js
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


// Main application flow
async function main() {
  try {
    console.log('🏠 Starting Hostel Application System...');

    // 1. Create new student (basic info)
    const newStudent = await StudentService.createStudent({
      rollNo: '2023CO101',
      firstName: 'Rahul',
      middleName: 'Kumar',
      lastName: 'Sharma',
      email: 'rahul.sharma@example.com',
      admissionYear: 2023,
      gender: 'Male',
      phone: '9876543210'
    });
    console.log('✅ Created student:', newStudent);

    // 2. Add room preferences
    const roomPref = await RoomPreferenceService.createPreference('2023CO101', {
      roomPreference1: 'AC_Triple_Seater',
roomPreference2: 'NonAC_Single_Seater',
roomPreference3: 'NonAC_Double_Seater',
roomPreference4: 'NonAC_Triple_Seater',
      bloodGroup: 'A_Positive',
      foodChoice: 'Veg',
      admissionRegion: 'Delhi',
      chronicProblems: 'None',
      stayedInHostelBefore: 'Yes',
      profilePhoto: Buffer.from('sample-photo'),
      signature: Buffer.from('sample-signature')
    });
    console.log('✅ Added room preferences:', roomPref);

    // 3. Add Delhi region details
    const delhiRegion = await DelhiRegionService.createDelhiRegion('2023CO101', {
      allotmentPriority: 'Delhi Category',
      distanceFromDTU: 15
    });
    console.log('✅ Added Delhi region details:', delhiRegion);

    // 4. Add academic details
    const academics = await AcademicService.createAcademicDetails('2023CO101', {
      cgpa: 8.75,
      course: 'Btech',
      backPapers: 0,
      previousInstitute: 'Delhi Public School'
    });
    console.log('✅ Added academic details:', academics);

    // 5. Add bank details
    const bankDetails = await BankService.createBankDetails('2023CO101', {
      bankName: 'State Bank of India',
      accountHolderName: 'Rahul Sharma',
      accountNumber: '1234567890',
      ifscCode: 'SBIN0001234',
      branchName: 'Dwarka Branch',
      bankAddress: 'Dwarka Sector 12, New Delhi'
    });
    console.log('✅ Added bank details:', bankDetails);

    // 6. Add parent details
    const parentDetails = await ParentService.createParentDetails('2023CO101', {
      parentType: 'Father',
      parentName: 'Rajesh Sharma',
      mobileNumber: '9876543211',
      email: 'rajesh.sharma@example.com',
      occupation: 'Business',
      designation: 'Proprietor',
      officeAddress: 'Connaught Place, New Delhi',
      officePhone: '01123456789'
    });
    console.log('✅ Added parent details:', parentDetails);

    // 7. Add address
    const address = await AddressService.createAddress('2023CO101', {
      currentAddress: 'A-123, XYZ Apartments, Dwarka, New Delhi',
      isSameAsPermanent: true,
      permanentAddress: 'A-123, XYZ Apartments, Dwarka, New Delhi'
    });
    console.log('✅ Added address:', address);

    // 8. Add local guardian
    const guardian = await GuardianService.createGuardian('2023CO101', {
      guardianName: 'Manoj Verma',
      phoneNumber: '9876543212',
      email: 'manoj.verma@example.com',
      occupation: 'Service',
      address: 'B-456, ABC Colony, Rohini, New Delhi'
    });
    console.log('✅ Added local guardian:', guardian);

    // 9. Add branch details
    const branch = await BranchService.createBranch('2023CO101', {
      branch: 'CO'
    });
    console.log('✅ Added branch details:', branch);

    // 10. Validate application
    await StudentService.validateApplication('2023CO101');
    console.log('✅ Application validated successfully');

    // 11. Submit application
    const submittedApp = await StudentService.submitApplication('2023CO101');
    console.log('✅ Application submitted:', submittedApp);

    // 12. Get complete application
    const completeApplication = await StudentService.getCompleteApplication('2023CO101');
    console.log('✅ Complete application:');
    console.log(JSON.stringify(completeApplication, null, 2));

    console.log('🎉 Application process completed successfully!');

  } catch (error) {
    console.error('❌ Application error:', error.message);
    // Rollback any created records if needed
    await StudentService.deleteStudent('2023CO101').catch(console.error);
  } finally {
    await prisma.$disconnect();
  }
}

// ========== SERVICE IMPLEMENTATIONS ========== //

const StudentService = {
  async createStudent(data) {
    return await prisma.student.create({
      data: {
        studRollno: data.rollNo,
        studFname: data.firstName,
        studMname: data.middleName,
        studLname: data.lastName,
        studEmail: data.email,
        admYear: data.admissionYear,
        gender: data.gender,
        studPhone: data.phone,
      }
    });
  },

  async getStudent(rollNo) {
    return await prisma.student.findUnique({
      where: { studRollno: rollNo }
    });
  },

  async submitApplication(rollNo) {
    return await prisma.student.update({
      where: { studRollno: rollNo },
      data: { 
        applicationStatus: 'Submitted',
        submittedAt: new Date() 
      }
    });
  },

  async getCompleteApplication(rollNo) {
    return await prisma.student.findUnique({
      where: { studRollno: rollNo },
      include: {
        roomType: true,
        delhiRegion: true,
        academicInfo: true,
        bankDetails: true,
        parentInfo: true,
        address: true,
        guardian: true,
        branch: true,
        allotments: true
      }
    });
  },

  async deleteStudent(rollNo) {
    // Delete all related records first
    await prisma.$transaction([
      prisma.roomPreferenceInfo.deleteMany({ where: { rollNo } }),
      prisma.delhiRegion.deleteMany({ where: { rollNo } }),
      prisma.academicDetails.deleteMany({ where: { rollNo } }),
      prisma.bankDetails.deleteMany({ where: { rollNo } }),
      prisma.parentDetails.deleteMany({ where: { rollNo } }),
      prisma.studentAddress.deleteMany({ where: { rollNo } }),
      prisma.localGuardian.deleteMany({ where: { rollNo } }),
      prisma.branch.deleteMany({ where: { rollNo } })
    ]);
    
    // Then delete the student
    return await prisma.student.delete({
      where: { studRollno: rollNo }
    });
  },

  async validateApplication(rollNo) {
    const student = await this.getStudent(rollNo);
    if (!student) throw new Error('Student not found');
    
    // Check all required fields are filled
    const requiredFields = [
      student.studFname,
      student.studEmail,
      student.roomType,
      student.academicInfo,
      student.bankDetails,
      student.parentInfo,
      student.address
    ];

    if (requiredFields.some(field => !field)) {
      throw new Error('Incomplete application - missing required fields', field);
    }

    // Additional validation checks
    if (student.studPhone.length < 10) {
      throw new Error('Invalid phone number');
    }

    if (student.admYear < 2000 || student.admYear > new Date().getFullYear()) {
      throw new Error('Invalid admission year');
    }

    return true;
  }
};

const RoomPreferenceService = {
  async createPreference(rollNo, data) {
    return await prisma.roomPreferenceInfo.create({
      data: {
        rollNo,
        roomPrf1: data.roomPreference1,
        roomPrf2: data.roomPreference2,
        roomPrf3: data.roomPreference3,
        roomPrf4: data.roomPreference4,
        bldGrp: data.bloodGroup,
        fdChoice: data.foodChoice,
        admRegion: data.admissionRegion,
        chronicProb: data.chronicProblems,
        stayingHostel: data.stayedInHostelBefore,
        profilePhoto: data.profilePhoto,
        signature: data.signature
      }
    });
  },

  async getPreference(rollNo) {
    return await prisma.roomPreferenceInfo.findUnique({
      where: { rollNo }
    });
  },

  async validatePreferences(rollNo) {
    const prefs = await this.getPreference(rollNo);
    if (!prefs) throw new Error('Room preferences not found');
    
    const requiredPrefs = [
      prefs.roomPrf1,
      prefs.bldGrp,
      prefs.fdChoice,
      prefs.admRegion
    ];

    if (requiredPrefs.some(field => !field)) {
      throw new Error('Incomplete room preferences');
    }

    return true;
  }
};

const DelhiRegionService = {
  async createDelhiRegion(rollNo, data) {
    return await prisma.delhiRegion.create({
      data: {
        rollNo,
        allotmentPriority: data.allotmentPriority,
        distDtu: data.distanceFromDTU
      }
    });
  },

  async getDelhiRegion(rollNo) {
    return await prisma.delhiRegion.findUnique({
      where: { rollNo }
    });
  }
};

const AcademicService = {
  async createAcademicDetails(rollNo, data) {
    return await prisma.academicDetails.create({
      data: {
        rollNo,
        cgpa: data.cgpa,
        course: data.course,
        backPaper: data.backPapers,
        lastInstitute: data.previousInstitute
      }
    });
  },

  async getAcademicDetails(rollNo) {
    return await prisma.academicDetails.findUnique({
      where: { rollNo }
    });
  }
};

const BankService = {
  async createBankDetails(rollNo, data) {
    return await prisma.bankDetails.create({
      data: {
        rollNo,
        bankName: data.bankName,
        bankHolderName: data.accountHolderName,
        accNo: data.accountNumber,
        bankIfsc: data.ifscCode,
        bankBranch: data.branchName,
        bankAddress: data.bankAddress
      }
    });
  },

  async getBankDetails(rollNo) {
    return await prisma.bankDetails.findUnique({
      where: { rollNo }
    });
  }
};

const ParentService = {
  async createParentDetails(rollNo, data) {
    return await prisma.parentDetails.create({
      data: {
        rollNo,
        parentType: data.parentType,
        parentName: data.parentName,
        parentMobno: data.mobileNumber,
        parentEmail: data.email,
        parentOccupation: data.occupation,
        parentDesignation: data.designation,
        pOfficeAddr: data.officeAddress,
        pOfficeNo: data.officePhone
      }
    });
  },

  async getParentDetails(rollNo) {
    return await prisma.parentDetails.findUnique({
      where: { rollNo }
    });
  }
};

const AddressService = {
  async createAddress(rollNo, data) {
    return await prisma.studentAddress.create({
      data: {
        rollNo,
        currAddress: data.currentAddress,
        isSameAddr: data.isSameAsPermanent,
        permAddress: data.permanentAddress
      }
    });
  },

  async getAddress(rollNo) {
    return await prisma.studentAddress.findUnique({
      where: { rollNo }
    });
  }
};

const GuardianService = {
  async createGuardian(rollNo, data) {
    return await prisma.localGuardian.create({
      data: {
        rollNo,
        guardianName: data.guardianName,
        guardianPhno: data.phoneNumber,
        guardianEmail: data.email,
        guardianOccupation: data.occupation,
        guardianAddr: data.address
      }
    });
  },

  async getGuardian(rollNo) {
    return await prisma.localGuardian.findUnique({
      where: { rollNo }
    });
  }
};

const BranchService = {
  async createBranch(rollNo, data) {
    return await prisma.branch.create({
      data: {
        rollNo,
        course: data.branch
      }
    });
  },

  async getBranch(rollNo) {
    return await prisma.branch.findUnique({
      where: { rollNo }
    });
  }
};

// Execute the application
main()
  // .then(() => console.log('🏁 Application process finished'))
  // .catch((e) => console.error('🔥 Fatal error:', e));




// module.exports = {
//   StudentService,
//   RoomPreferenceService,
//   DelhiRegionService,
//   AcademicService,
//   BankService,
//   ParentService,
//   AddressService,
//   GuardianService,
//   BranchService
// };