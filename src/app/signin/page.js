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

import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default async function Signin() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="min-h-screen flex container mx-auto justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          type="submit"
          className="flex items-center justify-center w-full gap-3 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
      </form>
    </div>
  );
}
