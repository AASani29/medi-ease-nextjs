import { signOut } from "@/auth"
import { Button } from "../ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className='flex justify-between px-5 py-1 items-center shadow-md bg-white'>
      <Image
        src='/MediEaseLogo.png'
        alt='MediEase Logo'
        width={140}
        height={100}
      />
      <div className='flex gap-1 items-center'>
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
    </nav>
  )
}

export default Navbar