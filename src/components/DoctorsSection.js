// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { categories } from "@/lib/data";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { getRequest } from "@/actions/requests";
// import DoctorCard from "./DoctorCard";

// export default async function DoctorsSection({ isHome }) {
//   const { requests } = await getRequest("accepted");
//   console.log("requests=>", requests);

//   return (
//     <div className="container mx-auto my-10">
//       <div className="flex justify-between">
//         <h1 className="text-3xl font-semibold">Doctors You Need</h1>

//         {isHome ? (
//           <Link href={"/doctors"}>
//             <Button>See All</Button>
//           </Link>
//         ) : (
//           <div>
//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Theme" />
//               </SelectTrigger>
//               <SelectContent>
//                 {categories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {category}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         )}
//       </div>

//       <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
//         {requests.map((request) => (
//           <DoctorCard key={request._id} request={request} isAdmin={false} />
//         ))}
//       </div>

//       <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-[#fff5f8]">
//       {/* Left Content */}
//       <div className="flex-1">
//         <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight">
//           Book an <br /> Appointment
//         </h2>

//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-pink-600 text-xl">👨‍⚕️</span>
//           <p className="text-lg font-medium text-gray-900">
//             Consult with 100+ Trusted Doctors
//           </p>
//         </div>

//         <p className="text-gray-600 mb-6">
//           Schedule an appointment in just a few clicks and consult with doctors from various specialties.
//         </p>

//         <a
//           href="/signup"
//           className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition-all text-sm md:text-base font-semibold"
//         >
//           <span>📅</span>
//           Create Account
//         </a>
//       </div>

//       {/* Right Image */}
//       <div className="flex-1">
//         <Image
//           src="/doctorholding.jpg" // ✅ Must be inside /public folder
//           alt="Doctor holding icons"
//           width={600}
//           height={400}
//           className="rounded-xl shadow-lg w-full h-auto object-cover"
//         />
//       </div>
//     </section>
//     </div>
//   );
// }


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/data";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { getRequest } from "@/actions/requests";
import DoctorCard from "./DoctorCard";

export default async function DoctorsSection({ isHome }) {
  const { requests } = await getRequest("accepted");

  return (
    <div className="container mx-auto my-10 px-4 md:px-6 overflow-hidden">

      {/* Heading and Select/Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full overflow-x-auto">
        {/* <h1 className="text-2xl sm:text-3xl font-semibold whitespace-nowrap">
          Doctors You Need
        </h1> */}
    
        {isHome ? (
          <Link href="/doctors" className="w-full md:w-auto">
            <Button className="w-full md:w-auto whitespace-nowrap">See All Doctors</Button>
          </Link>
        ) : (
          <div className="w-full md:w-[180px]">
            <Select>
              
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Doctors Grid */}
      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {requests.map((request) => (
          <DoctorCard key={request._id} request={request} isAdmin={false} />
        ))}
      </div>

    
    </div>
  );
}





// export default async function DoctorsSection({ isHome }) {
//   let requests = [];

//   try {
//     const data = await getRequest("accepted");
//     requests = data?.requests || [];
//   } catch (error) {
//     console.error("Failed to fetch requests:", error);
//   }

//   return (
//     <div className="container mx-auto my-10 px-4 md:px-6 overflow-hidden">
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full overflow-x-auto">
//         {isHome ? (
//           <Link href="/doctors" className="w-full md:w-auto">
//             <Button className="w-full md:w-auto whitespace-nowrap">See All Doctors</Button>
//           </Link>
//         ) : (
//           <div className="w-full md:w-[180px]">
//             <Select>
//               <SelectContent>
//                 {categories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {category}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         )}
//       </div>

//       {/* Doctors Grid */}
//       <div className="grid my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         {requests.map((request) => (
//           <DoctorCard key={request._id} request={request} isAdmin={false} />
//         ))}
//       </div>
//     </div>
//   );
// }
