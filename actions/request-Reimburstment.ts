"use server";

import type * as z from "zod";
import { db } from "@/lib/db";
import { reimbursementRequestSchema } from "@/schemas";
import { getReimburstmentByAppointmentId } from "@/data/reimburstment";

const getFileName = (filePath: any) => {
	const parts = filePath.split("\\");
	return parts[parts.length - 1];
};

export const requestReimburstment = async (
	values: z.infer<typeof reimbursementRequestSchema>,
) => {
	const validatedFields = reimbursementRequestSchema.safeParse(values);

	if (!validatedFields.success) {
		return { Error: "Invalid fields" };
	}

	const {
		patientId,
		appointmentId,
		amount,
		billImgUrl,
		referralImgUrl,
		prescriptionImgUrl,
		status,
		submittedAt,
	} = validatedFields.data;

	const existingReimburstment =
		await getReimburstmentByAppointmentId(appointmentId);

	if (existingReimburstment?.status === "PENDING") {
		return { Error: "The request already exists" };
	}

	const numberAmount = Number.parseFloat(amount);
	const billFileName = getFileName(billImgUrl);
	const refFileName = getFileName(referralImgUrl);
	const presFileName = getFileName(prescriptionImgUrl);

	await db.reimbursementRequest.create({
		data: {
			patientId,
			appointmentId,
			amount: numberAmount,
			billImgUrl: billFileName,
			referralImgUrl: refFileName,
			prescriptionImgUrl: presFileName,
			status,
			submittedAt,
		},
	});

	return { Success: "Successfully requested for Reimburstment" };
};
