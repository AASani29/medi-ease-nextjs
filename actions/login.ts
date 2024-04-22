"use server"

import { LoginSchema } from "@/schemas"
import * as z from "zod"

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values)

  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { Error: "Invalid fields" }
  }

  return { Success: "Logged in" }
}
