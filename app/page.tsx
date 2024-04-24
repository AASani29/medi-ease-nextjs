import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import LoginButton from "@/components/auth/login-button"
import { auth } from "@/auth"

export default async function Home() {
  const session = await auth()

  const userRole = session?.user?.role
  let dashBoardUrl = ""

  if (userRole === "ADMIN") {
    dashBoardUrl = "/admin"
  } else if (userRole === "DOCTOR") {
    dashBoardUrl = "/doctor"
  } else if (userRole === "PATIENT") {
    dashBoardUrl = "/patient"
  }

  return (
    <div className='p-2 px-4'>
      <nav className='border-b-2 border-gray-300'>
        <div className='flex justify-between'>
          <Image
            src='/MediEaseLogo.png'
            alt='MediEase Logo'
            className='my-2'
            width={200}
            height={100}
          />
          <div className='flex flex-col justify-end items-start'>
            {session ? (
              <Link href={dashBoardUrl}>
                <Button variant='outline'>Dashboard</Button>
              </Link>
            ) : (
              <LoginButton>
                <Button variant='outline'>Login</Button>
              </LoginButton>
            )}
          </div>
        </div>
        <h1 className='text-left text-xs mb-1 pl-10'>
          Your Health, Our Priority
        </h1>
      </nav>
      <h1 className='text-center text-2xl font-semibold pt-4'>
        Welcome to IUT Medical Centre
      </h1>
      <div className='px-10 flex gap-6 justify-center items-center mb-6 md:px-12'>
        <Image
          src='/IUT.jpg'
          alt='Hero Image'
          className='px-1 mt-4'
          height={300}
          width={600}
        />
        <Image
          src='/medical_centre.jpg'
          alt='Hospital Logo'
          className='mt-4'
          height={300}
          width={600}
        />
      </div>
      <div>
        <h1 className='text-left text-3xl mb-4 px-4'>
          University Medical Centre
        </h1>
        <p className='px-4 mb-6'>
          IUT has a Medical Center at the North- West corner of the campus. It
          has five well equipped observation beds, Mini operation Room, Medicine
          store, waiting area, and a pathological laboratory currently launched.
          It provides normal Medicare to the students, faculties, staff, and the
          family members. Necessary medicines are also available in the store.
          There are three doctors, two nurses doing the duties round the clock
          24/7. In case of emergency, the doctor on duty can be contacted on the
          Medical Centre Hotline: +88 01844 056056.
        </p>
      </div>
    </div>
  )
}
