"use server"
import { db } from "@/lib/db"

export const deleteUserAction = async (userId: string) => {
  try {
    // Get the user record
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { patient: true },
    })

    // Check if the user has a patient record
    if (user?.role === "PATIENT" && user.patient) {
      // Delete the patient record
      await db.patient.delete({
        where: { id: user.patient.id },
      })
    }

    // Delete the user record
    await db.user.delete({
      where: { id: userId },
    })

    return { success: true }
  } catch (error) {
    console.error("Error deleting user:", error)
    return { success: false, error: "Failed to delete user" }
  }
}
