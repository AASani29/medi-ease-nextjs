"use client"

import Link from "next/link"
import { FaPrint } from "react-icons/fa6"
import { Button } from "../ui/button"

const PrescriptionDetails = ({ prescription }: any) => {
  const handleExportClick = () => {
    console.log("Exporting PDF")
  }

  return (
    <div className='min-h-screen bg-gray-200 py-10'>
      <div className='container mx-auto px-4'>
        <div className='bg-gray-100 rounded-lg shadow-xl p-8' id='pdf'>
          <div className='flex justify-between'>
            <Link
              href='/doctor/appointments'
              className='block mb-4 text-gray-600 hover:text-gray-900'
            >
              &larr; Back to Appointments
            </Link>
            <Button
              onClick={handleExportClick}
              variant='ghost'
              size='icon'
              className='hover:text-green-700'
            >
              <FaPrint size={20} />
            </Button>
          </div>
          <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
            Prescription Details
          </h2>
          <div className='grid md:grid-cols-1 gap-6 mb-6'>
            <div className='mb-4'>
              <div className='flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#000000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3' />
                  <circle cx='12' cy='10' r='3' />
                  <circle cx='12' cy='12' r='10' />
                </svg>
                <h3 className='text-lg font-semibold text-gray-800'>
                  Basic Information
                </h3>
              </div>
              <hr className='h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700'></hr>
              <p>
                <strong>Prescription ID:</strong> {prescription.id}
              </p>
              <p>
                <strong>Appointment ID:</strong> {prescription.appointmentId}
              </p>
              <p>
                <strong>Diagnosis:</strong> {prescription.diagnosis}
              </p>
              <p>
                <strong>Treatment:</strong> {prescription.treatment}
              </p>
              <p>
                <strong>Notes:</strong> {prescription.notes}
              </p>
              {prescription.appointment.doctorId && (
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    Doctor
                  </h3>
                  <p>
                    <strong>ID:</strong> {prescription.appointment.doctorId}
                  </p>
                </div>
              )}
              {prescription.appointment.patientId && (
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    Patient
                  </h3>
                  <p>
                    <strong>ID:</strong> {prescription.appointment.patientId}
                  </p>
                </div>
              )}
              <p>
                <strong>Date:</strong>{" "}
                {new Date(prescription.appointment.time).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
            <div>
              <div className='flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                <h3 className='text-lg font-semibold text-gray-800'>
                  Prescribed Medicines
                </h3>
              </div>
              <hr className='h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700'></hr>
              {prescription.prescribedMedicines.map(
                (med: any, index: number) => (
                  <div
                    key={index}
                    className='mb-4 p-4 border border-gray-200 rounded-lg bg-blue-100 shadow-md'
                  >
                    <p>
                      <strong>Medicine:</strong> {med.medicine.medicineName} (
                      {med.medicine.manufacturer})
                    </p>
                    <p>
                      <strong>Dosage:</strong> {med.doseAmount}
                    </p>
                    <p>
                      <strong>Frequency:</strong> {med.frequencyPerDay} times a
                      day
                    </p>
                    <p>
                      <strong>Total Duration:</strong> {med.durationInDays} days
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <div className='flex items-center space-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
                <rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
              </svg>
              <h3 className='text-lg font-semibold text-gray-800'>
                Required Tests
              </h3>
            </div>
            <hr className='h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700'></hr>
            <div className='grid md:grid-cols-2 gap-2'>
              {prescription.prescribedTests.map((test: any, index: number) => (
                <div
                  key={index}
                  className='mb-2 p-4 border border-green-200 rounded-lg bg-green-100 shadow-md'
                >
                  <p>
                    <strong>Test:</strong> {test.test.testName}
                  </p>
                  <p>
                    <strong>Details:</strong> {test.test.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionDetails
