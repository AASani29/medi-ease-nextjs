import { auth } from "@/auth";
import Navbar from "@/components/common/common-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  FaUserEdit,
  FaUser,
  FaCalendarAlt,
  FaStethoscope,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AdminDashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const user = session?.user;
  const pfpColor = "bg-pink-500";
  const bgColor = "bg-gradient-to-bl from-blue-500 to-purple-300";

  // Fetch counts for patients, appointments, doctors, and reimbursement requests (mocked data for example)
  const totalPatients = 123; // Replace with actual data fetching logic
  const totalAppointments = 45; // Replace with actual data fetching logic
  const totalDoctors = 67; // Replace with actual data fetching logic
  const totalReimbursementRequests = 10; // Replace with actual data fetching logic

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="relative flex flex-col items-center rounded-[20px] w-full max-w-6xl mx-auto p-4 bg-white bg-clip-border mb-6">
          <div className="relative flex h-32 w-full justify-center bg-cover">
            <div
              className={`${bgColor} h-32 w-full rounded-lg flex items-center justify-center`}
            >
              <div
                className={`absolute -bottom-11 flex h-[87px] w-[87px] rounded-full items-end justify-end border-[4px] border-white ${pfpColor} dark:!border-navy-700`}
              >
                <div className="h-full w-full text-black rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                  DP
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {user?.name}
            </h4>
            <p className="text-base font-normal text-gray-600">{user?.email}</p>
          </div>
          <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                {user?.role}
              </p>
              <p className="text-sm font-normal text-gray-600">Role</p>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Button
              size="icon"
              variant="outline"
              className="hover:text-gray-50 hover:bg-gray-800 shadow-md"
            >
              <Link href={`/profile/edit-profile/${user?.id}`}>
                <FaUserEdit size={20} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <Card className="p-4 bg-green-100">
              <CardContent className="flex items-center">
                <FaUser className="text-3xl text-blue-500 mr-4" />
                <div>
                  <p className="text-2xl font-bold text-navy-700 dark:text-white">
                    {totalPatients}
                  </p>
                  <p className="text-sm font-normal text-gray-600">Patients</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-yellow-100">
              <CardContent className="flex items-center">
                <FaCalendarAlt className="text-3xl text-green-500 mr-4" />
                <div>
                  <p className="text-2xl font-bold text-navy-700 dark:text-white">
                    {totalAppointments}
                  </p>
                  <p className="text-sm font-normal text-gray-600">
                    Appointments
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-red-100">
              <CardContent className="flex items-center">
                <FaStethoscope className="text-3xl text-red-500 mr-4" />
                <div>
                  <p className="text-2xl font-bold text-navy-700 dark:text-white">
                    {totalDoctors}
                  </p>
                  <p className="text-sm font-normal text-gray-600">Doctors</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-purple-100">
              <CardContent className="flex items-center">
                <FaFileInvoiceDollar className="text-3xl text-purple-500 mr-4" />
                <div>
                  <p className="text-2xl font-bold text-navy-700 dark:text-white">
                    {totalReimbursementRequests}
                  </p>
                  <p className="text-sm font-normal text-gray-600">
                    Reimbursement Requests
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
