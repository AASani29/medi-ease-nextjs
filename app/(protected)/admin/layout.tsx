import { auth, signOut } from "@/auth"
import AdminSidebar from "@/components/admin/admin-sidebar"
import SidebarProvider from "@/components/admin/provider/SidebarProvider"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()

  if (!session) {
    redirect("/auth/login")
  }

  if (session?.user.role !== "ADMIN") {
    return (
      <div className='min-h-screen flex flex-grow items-center justify-center bg-gray-100'>
        <div className='rounded-lg bg-white p-8 text-center shadow-2xl'>
          <h1 className='mb-4 text-4xl font-bold'>401</h1>
          <p className='text-gray-600'>Not Authorized as Admin</p>
          <form
            className='mt-4'
            action={async () => {
              "use server"

              await signOut()
            }}
          >
            <Button type='submit' variant='default'>
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      <SidebarProvider>
        <div className='flex'>
          <AdminSidebar />
          <div className='bg-gray-50 w-full'>{children}</div>
        </div>
      </SidebarProvider>
    </>
  )
}

export default AdminLayout
