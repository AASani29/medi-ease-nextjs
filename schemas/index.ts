import * as z from "zod"

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
})

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(4, { message: "Minimum 4 characters required" }),
  role: z.enum(["PATIENT", "DOCTOR", "ADMIN", "null"]),
  patientType: z.enum(["STUDENT", "FACULTY", "STAFF", "null"]),
})

export const PatientSchema = z.object({
  dob: z.date().optional().nullish(),
  gender: z
    .string()
    .max(5, { message: "Gender must be at most 5 characters" })
    .optional()
    .nullish(),
  phone: z
    .string()
    .max(25, { message: "Phone number must be at most 25 characters" })
    .optional()
    .nullish(),
  bloodGroup: z
    .string()
    .max(10, { message: "Blood Group must be at most 10 characters" })
    .optional()
    .nullish(),
  address: z.string().optional().nullish(),
})

export const StudentInfoSchema = z.object({
  currentSemester: z.number().int().optional().nullish(),
  department: z
    .string()
    .max(50, { message: "Department must be at most 50 characters" })
    .optional()
    .nullish(),
  program: z
    .string()
    .max(50, { message: "Program must be at most 50 characters" })
    .optional()
    .nullish(),
  originCountry: z
    .string()
    .max(50, { message: "Origin Country must be at most 50 characters" })
    .optional()
    .nullish(),
})

export const FacultyInfoSchema = z.object({
  department: z
    .string()
    .max(50, { message: "Department must be at most 50 characters" })
    .optional()
    .nullish(),
  position: z
    .string()
    .max(50, { message: "Position must be at most 50 characters" })
    .optional()
    .nullish(),
  hireDate: z.date().optional().nullish(),
})

export const StaffInfoSchema = z.object({
  department: z
    .string()
    .max(50, { message: "Department must be at most 50 characters" })
    .optional()
    .nullish(),
  position: z
    .string()
    .max(50, { message: "Position must be at most 50 characters" })
    .optional()
    .nullish(),
  hireDate: z.date().optional().nullish(),
})

export const MedicineSchema = z.object({
  medicineName: z.string().min(1, { message: "Medicine name is required" }),
  manufacturer: z.string().min(1, { message: "Manufacturer is required" }),
  description: z.string().min(1, { message: "Description is required" }),
})

export const TestSchema = z.object({
  testName: z.string().min(1, { message: "Test name is required" }),
  details: z.string().min(1, { message: "Destails is required" }),
})
