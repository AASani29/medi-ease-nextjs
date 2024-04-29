"use server"

import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"
var bcrypt = require("bcryptjs")
var salt = bcrypt.genSaltSync(10)

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return { Error: "Invalid fields" }
  }

  const { name, email, password, role, patientType } = validatedFields.data
  var hashedPassword = bcrypt.hashSync(password, salt)
  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { Error: "Email already exists" }
  }

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      patientType,
      patient: {
        create: {},
      },
    },
    select: {
      id: true,
      patient: true,
    },
  })

  if (newUser.patient) {
    switch (patientType) {
      case "STUDENT":
        await db.studentInfo.create({
          data: {
            patient: {
              connect: {
                id: newUser.patient.id,
              },
            },
          },
        })
        break
      case "FACULTY":
        await db.facultyInfo.create({
          data: {
            patient: {
              connect: {
                id: newUser.patient.id,
              },
            },
          },
        })
        break
      case "STAFF":
        await db.staffInfo.create({
          data: {
            patient: {
              connect: {
                id: newUser.patient.id,
              },
            },
          },
        })
        break
      default:
        break
    }
  }

  return { Success: "User registered" }
}
