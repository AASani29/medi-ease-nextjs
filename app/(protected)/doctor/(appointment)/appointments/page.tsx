import { auth } from "@/auth"
import AppointmentCard from "@/components/doctor/appointment-card"
import { getDoctorSpecificAppointments } from "@/data/appointment"
import { getDoctorByUserId } from "@/data/doctor"

const AppointmentsPage = async () => {
  const session = await auth()
  const doctor = await getDoctorByUserId(session?.user.id)
  const appointments = await getDoctorSpecificAppointments(doctor?.id)

  return (
    <div className='p-8 px-24 flex gap-12 w-full'>
      <div className='flex flex-col gap-3'>
        <div className='mb-4'>
          <h4 className='text-2xl font-semibold text-navy-700 dark:text-white'>
            All Appointments
          </h4>
          <p className='text-base text-gray-600'>
            View all the appointments you have with patients here &rarr;
          </p>
        </div>
        {appointments?.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  )
}

export default AppointmentsPage
