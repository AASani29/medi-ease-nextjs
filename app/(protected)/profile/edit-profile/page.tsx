import Navbar from "@/components/common/common-navbar"
import EditProfile from "@/components/patient/edit-profile"

const EditProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className='py-8 flex justify-center items-center'>
        <EditProfile />
      </div>
    </div>
  )
}

export default EditProfilePage
