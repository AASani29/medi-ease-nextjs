"use server"

import { db } from "@/lib/db"
// import { redirect } from "next/navigation"
// import { revalidatePath } from "next/cache"

export const deleteUserAction = async (userId: string) => {
  try {
    await db.user.delete({
      where: {
        id: userId,
      },
    })

    return { success: true }
    // revalidatePath("/admin/users")
    // redirect("/admin/users")
  } catch (error) {
    console.error("Error deleting user:", error)
    return { success: false, error: "Failed to delete user" }
  }
}
