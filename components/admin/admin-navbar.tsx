import { signOut } from "@/auth"
import { Button } from "../ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const AdminNavbar = () => {
  return (
    <div className='flex justify-end px-4 py-2 items-center shadow-md bg-white'>
      <form
        className='px-4'
        action={async () => {
          "use server"

          await signOut()
        }}
      >
        <Button type='submit' variant='default' size='sm'>
          Sign Out
        </Button>
      </form>
      <Link href='/profile'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  )
}

export default AdminNavbar
