"use client";

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Calendar as CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
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
import { updateAppointment, rescheduleAppointment } from "@/actions/appointment";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

export default function AppointmentListView({ appointments, isDoctor, userId }) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [appointmentToReschedule, setAppointmentToReschedule] = useState(null);
  const { toast } = useToast();

  const handleCancelAppointment = async (appointmentId) => {
    if (!appointmentId) return;
    
    setLoading(true);
    try {
      await updateAppointment(appointmentId, "cancelled");
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
    if (!appointmentToReschedule || !appointmentToReschedule?._id) {
      toast({
        title: "Error",
        description: "No appointment selected for rescheduling.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // Call the reschedule endpoint
      const response = await rescheduleAppointment(appointmentToReschedule._id, date);
      
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
      console.error("Reschedule error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to reschedule appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setAppointmentToReschedule(null);
    }
  };

  // Handle dialog state separately
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openRescheduleDialog = (appointment) => {
    setAppointmentToReschedule(appointment);
    // If the appointment has a date, use it as the initial date
    if (appointment?.date) {
      setDate(new Date(appointment.date));
    }
    setIsDialogOpen(true);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Doctor/Patient</TableHead>
            <TableHead>Appointment Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => {
            const userInfo = isDoctor 
              ? appointment?.user 
              : appointment?.request?.user;
            
            const canModify = !isDoctor && appointment?.status === "pending";
            
            return (
              <TableRow key={appointment?._id}>
                <TableCell className="font-medium">
                  {userInfo?.firstName || ""} {userInfo?.lastName || ""}
                </TableCell>
                <TableCell>
                  {appointment?.date 
                    ? dayjs(new Date(appointment.date)).format("DD MMM YYYY")
                    : "Not specified"}
                </TableCell>
                <TableCell>
                  {appointment?.request?.appointmentTime || "Not specified"}
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  {appointment?.request?.specialization || "Not specified"}
                </TableCell>
                <TableCell>
                  {appointment?.request?.hospital || "Not specified"}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {isDoctor ? (
                      appointment?.status === "pending" && (
                        <>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-green-50 hover:bg-green-100 text-green-600"
                            onClick={() => updateAppointment(appointment?._id, "accepted")}
                            disabled={loading}
                          >
                            Accept
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-red-50 hover:bg-red-100 text-red-600"
                            onClick={() => updateAppointment(appointment?._id, "cancelled")}
                            disabled={loading}
                          >
                            Reject
                          </Button>
                        </>
                      )
                    ) : (
                      canModify && (
                        <>
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
                                  onClick={() => handleCancelAppointment(appointment?._id)}
                                  disabled={loading}
                                >
                                  {loading ? "Cancelling..." : "Yes, cancel it"}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => openRescheduleDialog(appointment)}
                            disabled={loading}
                          >
                            Reschedule
                          </Button>
                        </>
                      )
                    )}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
    </>
  );
} 