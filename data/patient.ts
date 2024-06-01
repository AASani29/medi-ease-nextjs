import { db } from "@/lib/db";

export const getPatientById = async (patientId: any) => {
	try {
		const patient = await db.patient.findUnique({
			where: { id: patientId },
			include: {
				user: true,
			},
		});

		return patient;
	} catch {
		return null;
	}
};

export const getPatientByUserId = async (userId: any) => {
	try {
		const patient = await db.patient.findUnique({
			where: { userId },
		});

		return patient;
	} catch {
		return null;
	}
};

export const getStudentInfo = async (patientId: string) => {
	try {
		const studentInfo = await db.studentInfo.findUnique({
			where: { patientId },
		});

		return studentInfo;
	} catch {
		return null;
	}
};

export const getFacultyInfo = async (patientId: string) => {
	try {
		const facultyInfo = await db.facultyInfo.findUnique({
			where: { patientId },
		});

		return facultyInfo;
	} catch {
		return null;
	}
};

export const getStaffInfo = async (patientId: string) => {
	try {
		const staffInfo = await db.staffInfo.findUnique({
			where: { patientId },
		});

		return staffInfo;
	} catch {
		return null;
	}
};

export const getPatientDueAmount = async (patientId: any) => {
	try {
		const patientDueAmount = await db.reimbursementRequest.findMany({
			where: {
				patientId,
				status: "PENDING",
			},
			select: {
				amount: true,
			},
		});

		return patientDueAmount;
	} catch {
		return null;
	}
};
