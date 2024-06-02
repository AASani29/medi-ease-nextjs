import { Button } from "@/components/ui/button";
import { getAppointmentById } from "@/data/appointment";
import Link from "next/link";

const AppointmentPage = async ({ params }: any) => {
	const { appointmentId } = params;

	const appointment = await getAppointmentById(appointmentId);
	const reimbursementRequest = appointment?.ReimbursementRequest;

	return (
		<div>
			Appointment Details Page
			{reimbursementRequest[0]?.status === "PENDING" ? (
				<Button
					disabled
					size="sm"
					variant="outline"
					className="bg-rose-400 text-white border-gray-400"
				>
					Reimbursement Requested
				</Button>
			) : (
				<Button
					size="sm"
					variant="outline"
					className="hover:bg-rose-700 hover:text-white border-gray-400"
				>
					<Link href={`/patient/reimbursement/${appointmentId}`}>
						Get Reimbursement &rarr;
					</Link>
				</Button>
			)}
		</div>
	);
};

export default AppointmentPage;
