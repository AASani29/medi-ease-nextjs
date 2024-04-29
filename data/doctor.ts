import { db } from "@/lib/db"

export const getAllDoctors = async () => {
  try {
    const doctors = await db.doctor.findMany({
      include: {
        user: true,
        Appointment: true,
        DoctorAvailability: true,
      },
    })

    return doctors
  } catch {
    return null
  }
}
