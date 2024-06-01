const GetReimbursementPage = async ({ params }: any) => {
	const { appointmentId } = params;

	return (
		<div>
			GetReimbursementPage
			<div>{appointmentId}</div>
		</div>
	);
};

export default GetReimbursementPage;
