import Navbar from "@/components/common/common-navbar"
import { getAllUsers } from "@/data/user"

const UsersPage = async () => {
  const users = await getAllUsers()

  return (
    <div>
      <Navbar />
      <div className='px-6'>
        <h1 className='text-2xl text-indigo-700 font-semibold py-3'>Users</h1>
        <ul className='border-indigo-700 p-2 rounded-md border-2'>
          {users?.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsersPage
