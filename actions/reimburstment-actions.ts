"use server";

import { db } from "@/lib/db";

export const RejectRequest = async (reimburstmentId: any) => {
	try {
		await db.reimbursementRequest.update({
			where: { id: reimburstmentId },
			data: {
				status: "REJECTED",
			},
		});
	} catch (error) {
		return { success: false, error: "Failed to reject request" };
	}
};

export const AcceptRequest = async (reimburstmentId: any) => {
	try {
		await db.reimbursementRequest.update({
			where: { id: reimburstmentId },
			data: {
				status: "ACCEPTED",
			},
		});
	} catch (error) {
		return { success: false, error: "Failed to accept request" };
	}
};
