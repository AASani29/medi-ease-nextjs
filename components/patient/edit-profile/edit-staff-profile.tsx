const EditStaffProfile = ({ user, patient, info }: any) => {
	return (
		<div>
			<h2 className="text-2xl">Staff Profile Edit</h2>
			<div className="w-full">
				{JSON.stringify(user)}
				{JSON.stringify(patient)}
				{JSON.stringify(info)}
			</div>
		</div>
	);
};

export default EditStaffProfile;
