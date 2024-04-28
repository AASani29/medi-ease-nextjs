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
  dob: z.string().min(1, { message: "Date of birth is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  bloodGroup: z.string().min(1, { message: "Blood Group is required" }),
  address: z.string().min(1, { message: "Address is required" }),
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
