import { db } from "@/lib/db";

export const getTotalPatients = async () => {
  try {
    const patientsCount = await db.patient.count();
    return patientsCount;
  } catch {
    return null;
  }
};

export const getTotalAppointments = async () => {
  try {
    const appointmentsCount = await db.appointment.count();
    return appointmentsCount;
  } catch {
    return null;
  }
};

export const getTotalDoctors = async () => {
  try {
    const doctorsCount = await db.doctor.count();
    return doctorsCount;
  } catch {
    return null;
  }
};

export const getAllPatients = async () => {
  try {
    const patients = await db.patient.findMany({
      include: {
        user: true,
      },
    });

    return patients;
  } catch {
    return null;
  }
};

export const getPatientByUserId = async (userId: any) => {
  try {
    const patient = await db.patient.findFirst({
      where: {
        userId,
      },
      include: {
        user: true,
      },
    });

    return patient;
  } catch {
    return null;
  }
};

export const getPatientNameById = async (patientId: any) => {
  try {
    const patient = await db.patient.findFirst({
      where: {
        id: patientId,
      },
      select: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return patient?.user.name;
  } catch {
    return null;
  }
};

export const getPatientById = async (patientId: any) => {
  try {
    const patient = await db.patient.findFirst({
      where: {
        id: patientId,
      },
      include: {
        user: true,
      },
    });

    return patient;
  } catch {
    return null;
  }
};

export const getAppointmentsByPatientId = async (patientId: any) => {
  try {
    const appointments = await db.appointment.findMany({
      where: {
        patientId,
      },
      include: {
        doctor: true,
      },
    });

    return appointments;
  } catch {
    return null;
  }
};
