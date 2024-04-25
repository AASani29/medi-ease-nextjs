"use server"

import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import { db } from "@/lib/db"
import { getUserById } from "@/data/user"

export const update = async (
  id: string,
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.omit({
    password: true,
  }).safeParse(values)

  if (!validatedFields.success) {
    return { Error: "Invalid fields" }
  }

  const { name, email, role, patientType } = validatedFields.data

  try {
    const existingUser = await getUserById(id)

    if (!existingUser) {
      return { Error: "User not found" }
    }

    await db.user.update({
      where: { id },
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
