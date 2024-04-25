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

  const { name, email, role, patientType } = validatedFields.data

  try {
    const existingUser = await getUserByEmail(email)

    if (!existingUser) {
      return { Error: "User not found" }
    }

    await db.user.update({
      where: { email },
      data: {
        name,
        email,
        role,
        patientType,
      },
    })

    return { Success: "User updated successfully" }
  } catch (error) {
    console.error("Error updating user:", error)
    return { Error: "Failed to update user" }
  }
}
