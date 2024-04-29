import AppointmentCard from "@/components/patient/appointment-card"
import FilterSection from "@/components/patient/filter-section"

const MedicalRecords = () => {
  return (
    <div className='px-8 flex gap-8'>
      <FilterSection />
      <AppointmentCard />
    </div>
  )
}

export default MedicalRecords

// TODO Need to add a filter section for appointments based on date, status, etc.
// TODO Need to add a search bar for appointments based on doctor name, etc.
// TODO Need to add a appointment card component.
// TODO Need to add a appointment details page.
// TODO Need to add a pagination for appointments.
