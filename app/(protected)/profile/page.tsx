import { auth } from "@/auth"
import Navbar from "@/components/common/common-navbar"
import { Button } from "@/components/ui/button"
import { getUserByEmail } from "@/data/user"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <div className='relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-2xl dark:!bg-navy-800 dark:text-white dark:!shadow-none mb-6 mt-12'>
          <div className='relative flex h-32 w-full justify-center rounded-xl bg-cover'>
            <Image
              height={32}
              width={32}
              alt='profile'
              src='/banner.png'
              className='absolute flex h-32 w-full justify-center rounded-xl bg-cover'
            />
            <div className='absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700'></div>
          </div>
          <div className='mt-16 flex flex-col items-center'>
            <h4 className='text-xl font-bold text-navy-700 dark:text-white'>
              {session?.user.name}
            </h4>
            <p className='text-base font-normal text-gray-600'>
              {session?.user.email}
            </p>
          </div>
          <div className='mt-6 mb-3 flex gap-14 md:!gap-14'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-2xl font-bold text-navy-700 dark:text-white'>
                {session?.user.role}
              </p>
              <p className='text-sm font-normal text-gray-600'>Role</p>
            </div>
            {session?.user.role === "PATIENT" && (
              <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl font-bold text-navy-700 dark:text-white'>
                  {session.user?.patientType}
                </p>
                <p className='text-sm font-normal text-gray-600'>Type</p>
              </div>
            )}
          </div>
        </div>

        <div className='flex gap-2 justify-center items-center'>
          {session?.user.role === "ADMIN" && (
            <Button variant='default'>
              <Link href='/admin'>Admin Dashboard</Link>
            </Button>
          )}

          {session?.user.role === "DOCTOR" && (
            <Button variant='default'>
              <Link href='/doctor'>Doctor Dashboard</Link>
            </Button>
          )}

          {session?.user.role === "PATIENT" && (
            <Button variant='default'>
              <Link href='/patient'>Patient Dashboard</Link>
            </Button>
          )}

          <Button variant='outline'>Edit Profile</Button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
