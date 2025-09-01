"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Button } from "../ui/button";
import { useState } from "react";
import { updateAppointment, rescheduleAppointment } from "@/actions/appointment";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

dayjs.extend(relativeTime);

export default function PatientAppointmentCard({ appointment, canModify }) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(appointment?.date ? new Date(appointment.date) : new Date());
  const { toast } = useToast();

  const handleCancelAppointment = async () => {
    setLoading(true);
    try {
      await updateAppointment(appointment?._id, "cancelled");
      toast({
        title: "Appointment cancelled",
        description: "The appointment has been cancelled successfully.",
      });
      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRescheduleAppointment = async () => {
    if (!date) return;
    
    setLoading(true);
    
    try {
      // Call the reschedule endpoint
      const response = await rescheduleAppointment(appointment?._id, date);
      
      if (response.success) {
        toast({
          title: "Appointment rescheduled",
          description: `Appointment rescheduled to ${format(date, "PPP")}`,
        });
        
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        throw new Error(response.msg || "Failed to reschedule");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to reschedule appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
      
      {canModify && (
        <CardFooter className="justify-end space-x-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-red-50 hover:bg-red-100 text-red-600"
              >
                Cancel
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Cancel Appointment</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to cancel this appointment? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No, keep it</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleCancelAppointment}
                  disabled={loading}
                >
                  {loading ? "Cancelling..." : "Yes, cancel it"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm" 
                variant="outline"
              >
                Reschedule
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Reschedule Appointment</DialogTitle>
                <DialogDescription>
                  Select a new date for your appointment
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <DialogFooter>
                <Button 
                  type="submit" 
                  onClick={handleRescheduleAppointment}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save changes"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      )}
    </Card>
  );
}
