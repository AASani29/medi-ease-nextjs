const EditStudentProfile = ({ user, patient, info }: any) => {
	return (
		<div>
			<h2 className="text-2xl">Student Profile Edit</h2>
			<div className="w-full">
				{JSON.stringify(user)}
				{JSON.stringify(patient)}
				{JSON.stringify(info)}
			</div>
		</div>
	);
};

export default EditStudentProfile;
