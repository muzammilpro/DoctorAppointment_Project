"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/UserModal";
import { RequestModal } from "@/lib/models/RequestModal";

const userFields = ["firstName", "lastName", "picture"];
const requestFields = ["bio", "hospital", "fees", "gender", "appointmentTime", "degree", "specialization", "experience", "number", "address"];

export async function updateMyProfile(values) {
  const session = await auth();
  if (!session?.user?._id) return { error: true, msg: "You must be signed in." };
  await connectDB();
  const userUpdate = Object.fromEntries(Object.entries(values).filter(([key]) => userFields.includes(key)));
  const requestUpdate = Object.fromEntries(Object.entries(values).filter(([key]) => requestFields.includes(key)));
  if (Object.keys(userUpdate).length) await UserModal.findByIdAndUpdate(session.user._id, userUpdate, { runValidators: true });
  if (Object.keys(requestUpdate).length) await RequestModal.findOneAndUpdate({ user: session.user._id }, requestUpdate, { runValidators: true });
  revalidatePath("/profile");
  return { error: false, msg: "Profile updated successfully." };
}