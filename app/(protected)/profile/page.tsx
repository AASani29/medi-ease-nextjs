import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }
  console.log(session?.user?.name)

  return (
    <div>
      <div className='text-2xl p-4'>{JSON.stringify(session)}</div>
      <form
        className='p-2'
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
