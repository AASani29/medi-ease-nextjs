"use server"

import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

var bcrypt = require("bcryptjs")
var salt = bcrypt.genSaltSync(10)

export const update = async (values: z.infer<typeof RegisterSchema>) => {
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

  await db.user.update({
    where: { email },
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      patientType,
    },
  })

  return { Success: "User updated" }
}
