// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { auth, signOut } from "../../auth";
// import Image from "next/image";

// export default async function Header() {
//   const session = await auth();

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between py-4 px-4">
//         {/* Left Section: Logo + Tabs */}
//         <div className="flex items-center gap-8">
//           <Link href="/" className="text-2xl font-bold tracking-wide font-mono">
//             <span className="text-indigo-600">Doc</span>
//             <span className="text-gray-800">Appoint</span>
//           </Link>

//           <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
//             <Link href="/doctors" className="hover:text-indigo-600 transition">
//               Doctors
//             </Link>
//             <Link href="/aboutus" className="hover:text-indigo-600 transition">
//               About Us
//             </Link>
//             <Link href="/contactus" className="hover:text-indigo-600 transition">
//               Contact Us
//             </Link>
//             <Link href="/service" className="hover:text-indigo-600 transition">
//               Services
//             </Link>
//           </nav>
//         </div>

//         {/* Right Section: Profile or Login */}
//         <div>
//           {session ? (
//             <Menubar>
//               <MenubarMenu>
//                 <MenubarTrigger className="p-0 m-0 border-none bg-transparent focus:outline-none">
//                   <Image
//                     src={session?.user?.image}
//                     height={42}
//                     width={42}
//                     className="rounded-full border-2 border-indigo-500 hover:scale-105 transition duration-200"
//                     alt="User Image"
//                   />
//                 </MenubarTrigger>

//                 <MenubarContent align="end" className="w-48 shadow-lg">
//                   <Link href="/profile">
//                     <MenubarItem className="hover:bg-indigo-100 cursor-pointer transition">
//                       Profile
//                     </MenubarItem>
//                   </Link>

//                   <MenubarSeparator />

//                   {session.user.role === "admin" ? (
//                     <Link href="/admin/request">
//                       <MenubarItem className="hover:bg-indigo-100 cursor-pointer transition">
//                         Requests
//                       </MenubarItem>
//                     </Link>
//                   ) : (
//                     <Link href="/appointments">
//                       <MenubarItem className="hover:bg-indigo-100 cursor-pointer transition">
//                         My Appointments
//                       </MenubarItem>
//                     </Link>
//                   )}

//                   <MenubarSeparator />

//                   <form
//                     action={async () => {
//                       "use server";
//                       await signOut("google");
//                     }}
//                   >
//                     <Button
//                       variant="ghost"
//                       className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-100 transition"
//                     >
//                       Logout
//                     </Button>
//                   </form>
//                 </MenubarContent>
//               </MenubarMenu>
//             </Menubar>
//           ) : (
//             <Link href="/signin">
//               <Button variant="default" className="bg-indigo-600 text-white hover:bg-indigo-700 transition">
//                 Login
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }



import Link from "next/link";
import { auth, signOut } from "../../auth";
import Image from "next/image";
import MobileNav from "./MobileNav";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "./ui/button";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left Section: Logo + Tabs */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-wide font-mono">
            <span className="text-indigo-600">Doc</span>
            <span className="text-gray-800">Appoint</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link href="/doctors" className="hover:text-indigo-600 transition">
              Doctors
            </Link>
            <Link href="/aboutus" className="hover:text-indigo-600 transition">
              About Us
            </Link>
            <Link href="/contactus" className="hover:text-indigo-600 transition">
              Contact Us
            </Link>
            <Link href="/service" className="hover:text-indigo-600 transition">
              Services
            </Link>
          </nav>
        </div>

        {/* Right Section: Profile or Login */}
        <div>
          {session ? (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="p-0 m-0 border-none bg-transparent focus:outline-none">
                  <Image
                    src={session?.user?.image}
                    height={42}
                    width={42}
                    className="rounded-full border-2 border-indigo-500 hover:scale-105 transition duration-200"
                    alt="User Image"
                  />
                </MenubarTrigger>

                <MenubarContent align="end" className="w-48 shadow-lg">
                  <Link href="/profile">
                    <MenubarItem className="hover:bg-indigo-100 cursor-pointer transition">
                      Profile
                    </MenubarItem>
                  </Link>

                  <MenubarSeparator />

                  {session.user.role === "admin" ? (
                    <Link href="/admin/request">
                      <MenubarItem className="hover:bg-indigo-100 cursor-pointer transition">
                        Requests
                      </MenubarItem>
                    </Link>
                  ) : (
                    <Link href="/appointments">
                      <MenubarItem className="hover:bg-indigo-100 cursor-pointer transition">
                        My Appointments
                      </MenubarItem>
                    </Link>
                  )}

                  <MenubarSeparator />

                  <form
                    action={async () => {
                      "use server";
                      await signOut("google");
                    }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-100 transition"
                    >
                      Logout
                    </Button>
                  </form>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
            <Link href="/signin">
              <Button variant="default" className="bg-indigo-600 text-white hover:bg-indigo-700 transition">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Nav client-side toggle */}
      <MobileNav />
    </header>
  );
}

