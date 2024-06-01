import { Button } from "@/components/ui/button";
import { getAppointmentById } from "@/data/appointment";
import Link from "next/link";

const AppointmentPage = async ({ params }: any) => {
	const { appointmentId } = params;

	const appointment = await getAppointmentById(appointmentId);

	console.log(appointment);

	return <div>Appointment Details Page</div>;
};

export default AppointmentPage;
