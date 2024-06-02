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

	return (
		<div className="py-6 px-8 space-y-6">
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
