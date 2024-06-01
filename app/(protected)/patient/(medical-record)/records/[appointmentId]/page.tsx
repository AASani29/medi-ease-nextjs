import { getAppointmentById } from "@/data/appointment";

const AppointmentPage = async ({ params }: any) => {
	const { appointmentId } = params;

	const appointment = await getAppointmentById(appointmentId);

	console.log(appointment);

	return <div>AppointmentPage</div>;
};

export default AppointmentPage;
