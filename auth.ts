import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import { db } from "./lib/db"

import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data
          console.log(email, password)

          const user = await getUserByEmail(email)
          console.log(user)

          const passwordMatch = password == user?.password
          console.log(passwordMatch)

          if (passwordMatch) return user
        }

        return null
      },
    }),
  ],
})
