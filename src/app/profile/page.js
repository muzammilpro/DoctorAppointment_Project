import connectDB from "@/lib/connectDB";
import { auth } from "../../../auth";
import { RequestModal } from "@/lib/models/RequestModal";
import { UserModal } from "@/lib/models/UserModal";
import ProfileEditor from "@/components/ProfileEditor";

export default async function Profile() {
  const session = await auth();
  if (!session?.user?._id) {
    return <div className="min-h-screen flex items-center justify-center text-center text-gray-600"><p>Log in to view profile</p></div>;
  }

  await connectDB();
  const [user, request] = await Promise.all([
    UserModal.findById(session.user._id).lean(),
    RequestModal.findOne({ user: session.user._id }).lean(),
  ]);

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center text-center text-gray-600"><p>Profile data was not found.</p></div>;
  }

  return <ProfileEditor user={JSON.parse(JSON.stringify(user))} request={request ? JSON.parse(JSON.stringify(request)) : null} />;
}