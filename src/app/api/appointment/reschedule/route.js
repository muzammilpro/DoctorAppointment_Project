import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import { AppointmentModal } from "@/lib/models/AppointmentModal";

export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, date } = body;

    if (!id || !date) {
      return NextResponse.json({
        success: false,
        msg: "Appointment ID and new date are required",
      });
    }

    // Find and update the appointment with the new date
    const appointment = await AppointmentModal.findByIdAndUpdate(
      id,
      { date: new Date(date) },
      { new: true }
    );

    if (!appointment) {
      return NextResponse.json({
        success: false,
        msg: "Appointment not found",
      });
    }

    return NextResponse.json({
      success: true,
      msg: "Appointment rescheduled successfully",
      appointment,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      msg: "Error rescheduling appointment",
      error: error.message,
    });
  }
} 