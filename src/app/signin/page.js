// import { Button } from "@/components/ui/button";
// import { auth, signIn } from "../../../auth";
// import { redirect } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";

// export default async function Signin() {
//   const session = await auth();
//   if (session) redirect('/')
//   return (
//     <div className="min-h-screen flex container mx-auto justify-center items-center">
//       <form
//         action={async () => {
//           "use server";
//           await signIn("google");
//         }}
//       >
//         {/* <Button variant={"outline"}>Continue with GOOGLE</Button> */}
//         <button
//           type="button"
//           className="flex items-center justify-center w-full gap-3 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
//         >
//           <FcGoogle className="text-xl" />
//           Continue with Google
//         </button>
//       </form>
//     </div>
//   );
// }

// import { auth, signIn } from "../../../auth";
// import { redirect } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";

// export default async function Signin() {
//   const session = await auth();
//   if (session) redirect("/");

//   return (
//     <div className="min-h-screen flex container mx-auto justify-center items-center">
//       <form
//         action={async () => {
//           "use server";
//           await signIn("google");
//         }}
//       >
//         <button
//           type="submit"
//           className="flex items-center justify-center w-full gap-3 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
//         >
//           <FcGoogle className="text-xl" />
//           Continue with Google
//         </button>
//       </form>
//     </div>
//   );
// }


import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaHeartbeat, FaUserMd, FaCalendarCheck } from "react-icons/fa";

export default async function Signin() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="min-h-screen flex bg-[#FDF6F5]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(3deg); }
        }
        .fade-in-1 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; animation-delay: 0.1s; }
        .fade-in-2 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; animation-delay: 0.25s; }
        .fade-in-3 { opacity: 0; animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; animation-delay: 0.4s; }
        .float-icon { animation: floatSlow 5s ease-in-out infinite; }
        .float-icon-delay { animation: floatSlow 6s ease-in-out infinite; animation-delay: 1.2s; }

        .google-btn {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .google-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px -12px rgba(190, 30, 60, 0.25);
          border-color: #E4A6AC;
        }
        .brand-glow {
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
        }
      `}</style>

      {/* Left branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 relative overflow-hidden bg-gradient-to-br from-[#BE1E3C] to-[#8F1730] p-14 text-white">
        <div className="brand-glow w-96 h-96 -top-24 -left-16" />
        <div className="brand-glow w-72 h-72 -bottom-20 -right-10" />

        <div className="fade-in-1 relative z-10">
          <p className="text-2xl font-bold tracking-tight">DocAppoint</p>
        </div>

        <div className="fade-in-2 relative z-10 max-w-md">
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
            Your healthcare, organized in one place.
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Sign in to book appointments, manage records, and stay connected with your doctors.
          </p>
        </div>

        <div className="fade-in-3 relative z-10 flex gap-6">
          <div className="float-icon w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
            <FaUserMd className="text-lg" />
          </div>
          <div className="float-icon-delay w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
            <FaCalendarCheck className="text-lg" />
          </div>
          <div className="float-icon w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
            <FaHeartbeat className="text-lg" />
          </div>
        </div>
      </div>

      {/* Right sign-in panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="fade-in-1 w-full max-w-sm">
          <div className="lg:hidden text-center mb-10">
            <p className="text-xl font-bold text-[#BE1E3C]">DocAppoint</p>
          </div>

          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#1B1230] mb-3">
              Welcome back
            </h2>
            <p className="text-gray-500 text-sm">
              Sign in to continue to your account
            </p>
          </div>

          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="google-btn flex items-center justify-center w-full gap-3 px-4 py-3.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-8 leading-relaxed">
            By continuing, you agree to DocAppoint&apos;s Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}