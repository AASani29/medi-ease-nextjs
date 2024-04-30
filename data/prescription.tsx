import { db } from "@/lib/db"

export const getPrescriptionByAppointmentId = async (appointmentId: string) => {
  try {
    const prescription = await db.prescription.findFirst({
      where: {
        appointmentId,
      },
    })

    return prescription
  } catch {
    return null
  }
}
