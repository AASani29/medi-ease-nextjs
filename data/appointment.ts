import { db } from "@/lib/db"

export const getAllAppointments = async () => {
  try {
    const appointments = await db.appointment.findMany({
      include: {
        doctor: true,
        patient: true,
      },
    })

    return appointments
  } catch {
    return null
  }
}

export const getAppointmentById = async (id: string) => {
  try {
    const appointment = await db.appointment.findUnique({
      where: {
        id,
      },
      include: {
        doctor: true,
        patient: true,
      },
    })

    return appointment
  } catch {
    return null
  }
}

export const getAppointmentByTime = async (time: any) => {
  try {
    const appointment = await db.appointment.findFirst({
      where: {
        time,
      },
    })

    return appointment
  } catch {
    return null
  }
}

export const getAppointmentsByDoctorId = async (doctorId: string) => {
  try {
    const appointments = await db.appointment.findMany({
      where: {
        doctorId,
      },
      include: {
        patient: true,
      },
    })

    return appointments
  } catch {
    return null
  }
}

export const getAppointmentsByPatientId = async (patientId: string) => {
  try {
    const appointments = await db.appointment.findMany({
      where: {
        patientId,
      },
      include: {
        doctor: true,
      },
    })

    return appointments
  } catch {
    return null
  }
}
