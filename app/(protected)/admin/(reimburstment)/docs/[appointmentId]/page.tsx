import { getAppointmentById } from "@/data/appointment";

const AppointmentDocsPage = async ({ params }: any) => {
	const { appointmentId } = params;

	const appointment = await getAppointmentById(appointmentId);
	console.log(appointment);

	return <div>AppointmentDocsPage</div>;
};

export default AppointmentDocsPage;
