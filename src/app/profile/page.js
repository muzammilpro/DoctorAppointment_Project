// import connectDB from "@/lib/connectDB";
// import { auth } from "../../../auth";
// import { RequestModal } from "@/lib/models/RequestModal";


// export default async function Profile() {

//   const session = await auth();
//   console.log("profile session =>", session.user)



//   await connectDB();

//   const requests = await RequestModal.findOne({ user: session.user._id });

//   console.log("profile request log =>", requests)




//   if (session.user.role == "user") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
//         <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md text-center transition hover:shadow-2xl duration-300">
//           <div className="flex justify-center mb-4">
//             <img
//               src={session.user.image}
//               alt="User Avatar"
//               className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow"
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-1">{session.user.name}</h2>
//           <p className="text-gray-500 mb-4">{session.user.email}</p>

//           <div className="border-t pt-4">
//             <p className="text-sm text-gray-400">Logged in via Google</p>
//           </div>
//         </div>
//       </div>
//       // <div className="container mx-auto">

//       // </div>
//     );
//   }

//   return (
//     <div>
//       doctor
//     </div>
//   );
// }


import connectDB from "@/lib/connectDB";
import { auth } from "../../../auth";
import { RequestModal } from "@/lib/models/RequestModal";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <p>Log in to view profile</p>
      </div>
    );
  }

  console.log("profile session =>", session.user);

  await connectDB();

  const request = await RequestModal.findOne({ user: session.user._id });
  console.log("profile request log =>", request);


  // USER PROFILE
  if (session.user.role === "user") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
        <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md text-center transition hover:shadow-2xl duration-300">
          <div className="flex justify-center mb-4">
            <img
              src={session.user.image}
              alt="User Avatar"
              className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{session.user.name}</h2>
          <p className="text-gray-500 mb-4">{session.user.email}</p>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-400">Logged in via Google</p>
          </div>
        </div>
      </div>
    );
  }

   // USER PROFILE
  if (session.user.role === "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
        <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md text-center transition hover:shadow-2xl duration-300">
          <div className="flex justify-center mb-4">
            <img
              src={session.user.image}
              alt="User Avatar"
              className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{session.user.name}</h2>
          <p className="text-gray-500 mb-4">{session.user.email}</p>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-400">Logged in via Google</p>
          </div>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-400">You are admin</p>
          </div>
        </div>
      </div>
    );
  }

  // DOCTOR PROFILE
  if (!request) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <p>No profile data found.</p>
      </div>
    );
  }

  const {
    status,
    bio,
    hospital,
    fees,
    gender,
    appointmentTime,
    degree,
    specialization,
    experience,
    number,
    address,
  } = request;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left: Image & Basic Info */}
          <div className="md:w-1/3 bg-indigo-600 p-6 text-white flex flex-col items-center justify-center">
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold mt-4">Dr.{session.user.name}</h2>
            <p className="text-sm mt-1 italic">{specialization}</p>
            <p className="mt-2 bg-white text-indigo-600 px-4 py-1 rounded-full text-xs font-semibold">
              Status: {status}
            </p>
          </div>

          {/* Right: Details */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Your Profile</h3>
            <p className="text-gray-600">{bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Detail label="Hospital" value={hospital} />
              <Detail label="Gender" value={gender} />
              <Detail label="Degree" value={degree} />
              <Detail label="Experience" value={experience + " years"} />
              <Detail label="Fees" value={"Rs. " + fees} />
              <Detail label="Appointment Time" value={appointmentTime} />
              <Detail label="Phone" value={number} />
              <Detail label="Address" value={address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Detail Component (JS Version)
function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
}
