import { auth } from "@/auth";
import ExpenseCard from "@/components/patient/expense-card";
import {
	getPatientByUserId,
	getPatientReimbursementRequests,
} from "@/data/patient";

const Expenses = async () => {
	const session = await auth();
	const user = session?.user;

	const patient = await getPatientByUserId(user?.id);
	const reimbursementRequests = await getPatientReimbursementRequests(
		patient?.id,
	);

	console.log(reimbursementRequests);

	return (
		<div>
			{reimbursementRequests?.map((reimbursementRequest) => {
				return (
					<ExpenseCard
						key={reimbursementRequest.id}
						reimbursementRequest={reimbursementRequest}
					/>
				);
			})}
		</div>
	);
};

export default Expenses;
