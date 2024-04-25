"use server"

import { db } from "@/lib/db"

export const deleteUserAction = async (userId: string) => {
  try {
    await db.user.delete({
      where: {
        id: userId,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error deleting user:", error)
    return { success: false, error: "Failed to delete user" }
  }
}
