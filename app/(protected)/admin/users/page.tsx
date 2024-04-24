import { FaEdit } from "react-icons/fa"
import { FaTrash } from "react-icons/fa6"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Navbar from "@/components/common/common-navbar"
import { getAllUsers } from "@/data/user"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const UsersPage = async () => {
  const users = await getAllUsers()

  return (
    <div>
      <Navbar />
      <div className='p-6 space-y-3'>
        <Button size='sm'>
          <Link href='/admin/add-user'>Add User</Link>
        </Button>
        <Table>
          <TableCaption>Users list for IUT Medical Centre</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>PatientType</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.patientType}</TableCell>
                <TableCell>
                  <FaEdit />
                </TableCell>
                {user?.role !== "ADMIN" && (
                  <TableCell>
                    <FaTrash />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UsersPage
