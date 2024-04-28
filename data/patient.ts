import { db } from "@/lib/db"

export const getPatientByUserId = async (userId: string) => {
  try {
    const patient = await db.patient.findUnique({
      where: { userId },
    })

    return patient
  } catch {
    return null
  }
}

export const getStudentInfo = async (patientId: string) => {
  try {
    const studentInfo = await db.studentInfo.findUnique({
      where: { patientId },
    })

    return studentInfo
  } catch {
    return null
  }
}

export const getFacultyInfo = async (patientId: string) => {
  try {
    const facultyInfo = await db.facultyInfo.findUnique({
      where: { patientId },
    })

    return facultyInfo
  } catch {
    return null
  }
}

export const getStaffInfo = async (patientId: string) => {
  try {
    const staffInfo = await db.staffInfo.findUnique({
      where: { patientId },
    })

    return staffInfo
  } catch {
    return null
  }
}
