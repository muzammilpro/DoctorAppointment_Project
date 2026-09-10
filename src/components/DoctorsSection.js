import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import { Button } from "./ui/button";
import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/RequestModal";
import DoctorCard from "./DoctorCard";

export default async function DoctorsSection({ isHome }) {
  noStore();
  await connectDB();
  const doctorRequests = await RequestModal.find({ status: "accepted" })
    .populate("user")
    .lean();
  const requests = JSON.parse(JSON.stringify(doctorRequests));

  return (
    <div className="relative container mx-auto my-10 px-4 md:px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-64 w-[90%] rounded-full bg-gradient-to-r from-pink-100/40 via-indigo-100/40 to-transparent blur-3xl -z-10" />
      <div className="flex items-center justify-between gap-4 pb-2">
        <h1 className="text-2xl sm:text-3xl font-semibold">Doctors you need</h1>
        {isHome && <Link href="/doctors"><Button className="rounded-xl">See all doctors</Button></Link>}
      </div>
      {requests.length ? (
        <div className="grid my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {requests.map((request) => <DoctorCard key={request._id} request={request} isAdmin={false} />)}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center text-slate-400">
          <Image src="/doctorholding.jpg" alt="Doctors" width={160} height={107} className="mb-4 rounded-xl opacity-70" />
          <p className="text-sm">No approved doctors are available right now.</p>
        </div>
      )}
    </div>
  );
}