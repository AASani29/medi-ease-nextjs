import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const DoctorDashboard = () => {
  return (
    <div className='container mx-auto px-4 py-10'>
      <Card className='shadow-2xl'>
        <CardHeader>
          <CardTitle className='text-xl'>Doctors Dashboard</CardTitle>
          <CardDescription>
            Welcome to the doctors dashboard. Here you can view and manage
            appointments and prescribe medications to patients.
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <Card className='shadow-xl bg-cyan-50'>
            <CardHeader>
              <CardTitle>View Appointments</CardTitle>
              <CardDescription>
                View and manage appointments scheduled with you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm'>
                You can view and manage appointments scheduled with you by
                patients.
              </p>
            </CardContent>
            <CardFooter>
              <Link href='/doctor/appointments'>
                <Button
                  size='sm'
                  variant='outline'
                  className='hover:bg-blue-600 text-blue-600 hover:text-white font-semibold shadow-md'
                >
                  View Appointments
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className='shadow-xl bg-lime-50'>
            <CardHeader>
              <CardTitle>Provide Referral</CardTitle>
              <CardDescription>
                Provide referral to patients for their treatment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm'>
                You can provide referral to patients for their treatment to
                other doctors.
              </p>
            </CardContent>
            <CardFooter>
              <Link href='/doctor/referrals'>
                <Button
                  size='sm'
                  variant='outline'
                  className='hover:bg-green-600 text-green-600 hover:text-white font-semibold shadow-md'
                >
                  Provide Referral
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </CardContent>
        <CardFooter>
          <Link href='/profile'>
            <Button variant='link' size='default'>
              View Profile &rarr;
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DoctorDashboard
