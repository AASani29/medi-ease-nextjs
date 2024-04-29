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

export const getDoctorByUserId = async (userId: any) => {
  try {
    const doctor = await db.doctor.findFirst({
      where: {
        userId,
      },
      include: {
        user: true,
        Appointment: true,
        DoctorAvailability: true,
      },
    })

    return doctor
  } catch {
    return null
  }
}
