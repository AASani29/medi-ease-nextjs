"use client"

import { useState } from "react"
import { deleteUserAction } from "@/actions/delete-user"
import { toast } from "sonner"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface DeleteUserProps {
  userId: string
  children: React.ReactNode
}

const DeleteUser = ({ userId, children }: DeleteUserProps) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDeleteUser = async () => {
    setIsDeleting(true)
    setError(null)

    const { success, error: deleteError } = await deleteUserAction(userId)

    if (success) {
      toast("User successfully deleted ✅", {
        description: "User have been removed from the database",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      })
    } else {
      setError(deleteError || "Failed to delete user")
    }

    setIsDeleting(false)
  }

  return (
    <button
      className='cursor-pointer'
      onClick={handleDeleteUser}
      disabled={isDeleting}
    >
      {isDeleting ? <AiOutlineLoading3Quarters /> : children}
    </button>
  )
}

export default DeleteUser
