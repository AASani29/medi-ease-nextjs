import { auth } from "@/auth"
import AppointmentCard from "@/components/patient/appointment-card"
import FilterSection from "@/components/patient/filter-section"
import { getPatientSpecificAppointments } from "@/data/appointment"
import { getPatientByUserId } from "@/data/patient"

const MedicalRecords = async () => {
  const session = await auth()
  const patient = await getPatientByUserId(session?.user.id)
  const appointments = await getPatientSpecificAppointments(patient?.id)

  return (
    <div className='p-8 flex gap-12 w-full'>
      <FilterSection />
      <div className='flex flex-col gap-3'>
        <div className='mb-4'>
          <h4 className='text-2xl font-semibold text-navy-700 dark:text-white'>
            Appointment Records
          </h4>
          <p className='text-base text-gray-600'>
            View all your appointment records below &rarr;
          </p>
        </div>
        {appointments?.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  )
}

export default MedicalRecords

// TODO Need to add a filter section for appointments based on date, status, etc.
// TODO Need to add a appointment details page.
