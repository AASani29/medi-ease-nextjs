import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div>
      <div className='text-xl p-4'>{JSON.stringify(session)}</div>
      <form
        className='px-4'
        action={async () => {
          "use server"

          await signOut()
        }}
      >
        <Button type='submit' variant='outline'>
          Sign Out
        </Button>
      </form>
    </div>
  )
}

export default ProfilePage
