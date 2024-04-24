import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div>
      <div className='text-xl p-4'>{JSON.stringify(session)}</div>
      <div className='flex gap-2'>
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

        {session?.user.role === "ADMIN" && (
          <Button variant='default'>
            <Link href='/admin'>Admin Dashboard</Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
