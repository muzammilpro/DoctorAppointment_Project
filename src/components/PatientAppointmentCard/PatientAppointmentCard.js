import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function PatientAppointmentCard({ appointment }) {
  return (
    <Card key={appointment?._id} className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={appointment?.request?.user?.picture}
            alt={`${appointment?.user?.firstName || ""} ${appointment?.user?.lastName || ""}`}
          />
          <AvatarFallback>
            {appointment?.request?.user?.firstName?.[0] || "U"}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>
            {appointment?.request?.user?.firstName || ""}{" "}
            {appointment?.request?.user?.lastName || ""}
          </CardTitle>
          <Badge
            variant={
              appointment?.status === "pending"
                ? "outline"
                : appointment?.status === "accepted"
                ? "success"
                : "destructive"
            }
          >
            {(appointment?.status?.charAt(0)?.toUpperCase() + 
              appointment?.status?.slice(1)) || "Unknown"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">
          {appointment?.request?.bio || "No bio available"}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>
            {appointment?.date 
              ? dayjs(new Date(appointment.date)).fromNow() +
                " " +
                dayjs(new Date(appointment.date)).format("dd DD MMMM")
              : "Date not specified"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>{appointment?.request?.appointmentTime || "Time not specified"}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>
            {appointment?.request?.hospital || "Hospital not specified"}
            {appointment?.request?.address ? `, ${appointment.request.address}` : ""}
          </span>
        </div>
        <p className="text-sm font-semibold">
          Specialization: {appointment?.request?.specialization || "Not specified"}
        </p>
        <p className="text-sm font-semibold">
          Fees: ${appointment?.request?.fees || "0"}
        </p>
      </CardContent>
    </Card>
  );
}
