import { Button } from "@/components/ui/button"
import Link from "next/link"

const DoctorDashboard = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='max-w-3xl mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Doctors Dashboard</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-blue-100 border border-blue-200 rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>View Appointments</h3>
            <p className='text-gray-600'>
              View and manage appointments scheduled with you.
            </p>
            <div className='mt-5'>
              <Link href='/doctor/appointments'>
                <Button
                  variant='secondary'
                  className='hover:bg-blue-600 text-blue-600 hover:text-white font-semibold'
                >
                  View Appointments
                </Button>
              </Link>
            </div>
          </div>
          <div className='bg-green-100 border border-green-200 rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>
              Prescribe Medications
            </h3>
            <p className='text-gray-600'>
              Prescribe medications to patients for their treatment.
            </p>
            <div className='mt-5'>
              <Link href='/doctor/prescribe'>
                <Button
                  variant='secondary'
                  className='hover:bg-green-600 text-green-600 hover:text-white font-semibold'
                >
                  Prescribe Medications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
