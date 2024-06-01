import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

import { FaCalendarWeek } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { getUserById } from "@/data/user";
import { getPrescriptionByAppointmentId } from "@/data/prescription";

const AppointmentCard: React.FC<{ appointment: any }> = async ({
	appointment,
}) => {
	const user = await getUserById(appointment.doctor.userId);

	const prescription = await getPrescriptionByAppointmentId(appointment.id);

	const appointmentDate = new Date(appointment.time);
	const options = {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	};
	const appointmentDateString = appointmentDate.toLocaleDateString(
		"en-US",
		options,
	);
	const appointmentTimeString = appointmentDate.toLocaleTimeString();

	return (
		<Card className="mb-4 shadow-xl w-[83.5rem]">
			<CardHeader>
				<CardTitle>{user?.name}</CardTitle>
				<CardDescription>{appointment.doctor.specialization}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				<div className="text-sm">
					<div className="flex gap-2 items-center">
						<FaCalendarWeek className="text-gray-500" />
						<p>{appointmentDateString}</p>
					</div>
					<div className="flex gap-2 items-center">
						<FaClock className="text-gray-500" />
						<p>{appointmentTimeString}</p>
					</div>
				</div>
				<div>
					{appointment.status === "PENDING" ? (
						<p className="text-sm text-red-600">No prescription</p>
					) : (
						<Link href={`/patient/prescription/${prescription?.id}`}>
							<Button
								size="sm"
								variant="outline"
								className="hover:text-white hover:bg-lime-800"
							>
								View Prescription &rarr;
							</Button>
						</Link>
					)}
				</div>
			</CardContent>
			<CardFooter>
				<p className="text-sm text-gray-600">
					Status : {` `}
					<span
						className={`${
							appointment.status === "PENDING"
								? "text-red-500"
								: "text-green-700"
						} font-semibold`}
					>
						{appointment.status}
					</span>
				</p>
			</CardFooter>
		</Card>
	);
};

export default AppointmentCard;
