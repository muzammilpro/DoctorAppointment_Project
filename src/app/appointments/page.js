import { auth } from "../../../auth";
import { getAppointments } from "@/actions/appointment";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, CheckCircle, XCircle } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DoctorAppointmentCard from "@/components/DoctorAppointmentCard/DoctorAppointmentCard";
import PatientAppointmentCard from "@/components/PatientAppointmentCard/PatientAppointmentCard";
import AppointmentFilterTabs from "@/components/Tabs/Tabs";
dayjs.extend(relativeTime);

export default async function Appointments({ searchParams }) {
  const session = await auth();

  const { status } = searchParams || {};
  
  // Return early if no session
  if (!session || !session?.user) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="font-bold text-2xl">Please sign in to view appointments</h1>
        <div className="mt-4">
          <Button asChild>
            <a href="/signin">Sign In</a>
          </Button>
        </div>
      </div>
    );
  }

  const { appointments = [], stats = { pending: 0, accepted: 0, cancelled: 0 } } = await getAppointments(
    session?.user?.role === "doctor" ? "doctor" : "user",
    session?.user?._id,
    status
  );

  const isDoctor = session?.user?.role === "doctor";
  
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mt-10">
        {isDoctor ? "Patients Appointments" : "Your Doctors Appointments"}
      </h1>

      <AppointmentFilterTabs status={status} />

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">Pending : {stats?.pending || 0}</h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Accepted : {stats?.accepted || 0}
          </h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Cancelled : {stats?.cancelled || 0}
          </h1>
        </div>
      </div>
      
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments?.length > 0 ? (
          appointments.map((appointment) =>
            isDoctor ? (
              <DoctorAppointmentCard
                key={appointment?._id}
                appointment={appointment}
              />
            ) : (
              <PatientAppointmentCard
                key={appointment?._id}
                appointment={appointment}
              />
            )
          )
        ) : (
          <div className="col-span-3 text-center py-10">
            <h2 className="text-xl font-medium text-gray-500">No appointments found</h2>
            <p className="mt-2 text-muted-foreground">
              {status ? `No ${status} appointments available.` : "You don't have any appointments yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
