import { getInfoAction } from "@/actions/get-info"
import { getPatientAction } from "@/actions/get-patient"
import { getUserAction } from "@/actions/get-user"
import { auth } from "@/auth"
import Navbar from "@/components/common/common-navbar"
import EditProfile from "@/components/patient/edit-profile"
import { redirect } from "next/navigation"

interface EditProfileProps {
  params: {
    userId: string
  }
}

const EditProfilePage = async ({ params }: EditProfileProps) => {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }

  const { userId } = params
  const {
    success: userSuccess,
    user,
    error: userError,
  } = await getUserAction(userId)
  const {
    success: patientSuccess,
    patient,
    error: patientError,
  } = await getPatientAction(userId)

  const {
    success: infoSuccess,
    info,
    error: infoError,
  } = await getInfoAction(patient?.id, user?.patientType)

  if (!userSuccess) {
    console.error(userError)
    return <div>Error fetching user data</div>
  }

  if (!patientSuccess) {
    console.error(patientError)
    return <div>Error fetching patient data</div>
  }

  if (!infoSuccess) {
    console.error(infoError)
    return <div>Error fetching info data</div>
  }

  return (
    <div>
      <Navbar />
      <div className='py-6 flex justify-center items-center'>
        <EditProfile user={user} patient={patient} info={info} />
      </div>
    </div>
  )
}

export default EditProfilePage
