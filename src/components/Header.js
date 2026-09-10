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



// import Link from "next/link";
// import { auth, signOut } from "../../auth";
// import Image from "next/image";
// import MobileNav from "./MobileNav";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
// import { Button } from "./ui/button";

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

//           {/* Desktop Nav */}
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

//       {/* Mobile Nav client-side toggle */}
//       <MobileNav />
//     </header>
//   );
// }


// import Link from "next/link";
// import { auth, signOut } from "../../auth";
// import Image from "next/image";
// import MobileNav from "./MobileNav";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
// import { Button } from "./ui/button";

// export default async function Header() {
//   const session = await auth();

//   const navLinks = [
//     { href: "/doctors", label: "Doctors" },
//     { href: "/aboutus", label: "About us" },
//     { href: "/contactus", label: "Contact us" },
//     { href: "/service", label: "Services" },
//   ];

//   return (
//     <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-[#F1E4E4]">
//       <style>{`
//         @keyframes logoFadeIn {
//           from { opacity: 0; transform: translateX(-8px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .header-logo { animation: logoFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }

//         .nav-link {
//           position: relative;
//           color: #4B5563;
//           transition: color 0.25s ease;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: -4px;
//           width: 0%;
//           height: 2px;
//           background: #BE1E3C;
//           transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
//         }
//         .nav-link:hover {
//           color: #BE1E3C;
//         }
//         .nav-link:hover::after {
//           width: 100%;
//         }

//         .avatar-ring {
//           transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
//         }
//         .avatar-ring:hover {
//           transform: scale(1.06);
//           box-shadow: 0 0 0 4px rgba(190, 30, 60, 0.15);
//         }

//         .login-btn {
//           transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, background 0.3s ease;
//         }
//         .login-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 24px -8px rgba(190, 30, 60, 0.35);
//         }
//       `}</style>

//       <div className="container mx-auto flex items-center justify-between py-4 px-4">
//         {/* Left Section: Logo + Tabs */}
//         <div className="flex items-center gap-10">
//           <Link href="/" className="header-logo text-2xl font-bold tracking-wide font-mono">
//             <span className="text-[#BE1E3C]">Doc</span>
//             <span className="text-[#1B1230]">Appoint</span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-8 text-sm font-medium">
//             {navLinks.map((link) => (
//               <Link key={link.href} href={link.href} className="nav-link pb-1">
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* Right Section: Profile or Login */}
//         <div>
//           {session ? (
//             <Menubar className="border-none bg-transparent p-0">
//               <MenubarMenu>
//                 <MenubarTrigger className="p-0 m-0 border-none bg-transparent focus:outline-none data-[state=open]:bg-transparent">
//                   <Image
//                     src={session?.user?.image}
//                     height={42}
//                     width={42}
//                     className="avatar-ring rounded-full border-2 border-[#BE1E3C]"
//                     alt="User Image"
//                   />
//                 </MenubarTrigger>

//                 <MenubarContent
//                   align="end"
//                   className="w-52 shadow-xl rounded-xl border border-[#F1E4E4] p-1.5
//                     data-[state=open]:animate-in data-[state=closed]:animate-out
//                     data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
//                     data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
//                     data-[state=open]:slide-in-from-top-2"
//                 >
//                   <Link href="/profile">
//                     <MenubarItem className="rounded-lg px-3 py-2 hover:bg-[#FBEAEC] hover:text-[#BE1E3C] cursor-pointer transition-colors">
//                       Profile
//                     </MenubarItem>
//                   </Link>

//                   <MenubarSeparator className="bg-[#F1E4E4]" />

//                   {session.user.role === "admin" ? (
//                     <Link href="/admin/request">
//                       <MenubarItem className="rounded-lg px-3 py-2 hover:bg-[#FBEAEC] hover:text-[#BE1E3C] cursor-pointer transition-colors">
//                         Requests
//                       </MenubarItem>
//                     </Link>
//                   ) : (
//                     <Link href="/appointments">
//                       <MenubarItem className="rounded-lg px-3 py-2 hover:bg-[#FBEAEC] hover:text-[#BE1E3C] cursor-pointer transition-colors">
//                         My appointments
//                       </MenubarItem>
//                     </Link>
//                   )}

//                   <MenubarSeparator className="bg-[#F1E4E4]" />

//                   <form
//                     action={async () => {
//                       "use server";
//                       await signOut("google");
//                     }}
//                   >
//                     <Button
//                       variant="ghost"
//                       className="w-full justify-start rounded-lg px-3 py-2 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
//                     >
//                       Logout
//                     </Button>
//                   </form>
//                 </MenubarContent>
//               </MenubarMenu>
//             </Menubar>
//           ) : (
//             <Link href="/signin">
//               <Button className="login-btn bg-[#BE1E3C] text-white hover:bg-[#A5182F] rounded-full px-6">
//                 Login
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile Nav client-side toggle */}
//       <MobileNav />
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

const headerStyles = `
  @keyframes logoFadeIn {
    from { opacity: 0; transform: translateX(-8px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .header-logo { animation: logoFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }

  .nav-link {
    position: relative;
    color: #4B5563;
    transition: color 0.25s ease;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: #BE1E3C;
    transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .nav-link:hover {
    color: #BE1E3C;
  }
  .nav-link:hover::after {
    width: 100%;
  }

  .avatar-ring {
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
  }
  .avatar-ring:hover {
    transform: scale(1.06);
    box-shadow: 0 0 0 4px rgba(190, 30, 60, 0.15);
  }

  .login-btn {
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, background 0.3s ease;
  }
  .login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -8px rgba(190, 30, 60, 0.35);
  }
`;

export default async function Header() {
  const session = await auth();

  const navLinks = [
    { href: "/doctors", label: "Doctors" },
    { href: "/aboutus", label: "About us" },
    { href: "/contactus", label: "Contact us" },
    { href: "/service", label: "Services" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-[#F1E4E4]">
      <style dangerouslySetInnerHTML={{ __html: headerStyles }} />

      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left Section: Logo + Tabs */}
        <div className="flex items-center gap-10">
          <Link href="/" className="header-logo text-2xl font-bold tracking-wide font-mono">
            <span className="text-[#BE1E3C]">Doc</span>
            <span className="text-[#1B1230]">Appoint</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link pb-1">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section: Profile or Login */}
        <div>
          {session ? (
            <Menubar className="border-none bg-transparent p-0">
              <MenubarMenu>
                <MenubarTrigger className="p-0 m-0 border-none bg-transparent focus:outline-none data-[state=open]:bg-transparent">
                  <Image
                    src={session?.user?.image}
                    height={42}
                    width={42}
                    className="avatar-ring rounded-full border-2 border-[#BE1E3C]"
                    alt="User Image"
                  />
                </MenubarTrigger>

                <MenubarContent
                  align="end"
                  className="w-52 shadow-xl rounded-xl border border-[#F1E4E4] p-1.5
                    data-[state=open]:animate-in data-[state=closed]:animate-out
                    data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
                    data-[state=open]:slide-in-from-top-2"
                >
                  <Link href="/profile">
                    <MenubarItem className="rounded-lg px-3 py-2 hover:bg-[#FBEAEC] hover:text-[#BE1E3C] cursor-pointer transition-colors">
                      Profile
                    </MenubarItem>
                  </Link>

                  <MenubarSeparator className="bg-[#F1E4E4]" />

                  {session.user.role === "admin" ? (
                    <Link href="/admin/request">
                      <MenubarItem className="rounded-lg px-3 py-2 hover:bg-[#FBEAEC] hover:text-[#BE1E3C] cursor-pointer transition-colors">
                        Requests
                      </MenubarItem>
                    </Link>
                  ) : (
                    <Link href="/appointments">
                      <MenubarItem className="rounded-lg px-3 py-2 hover:bg-[#FBEAEC] hover:text-[#BE1E3C] cursor-pointer transition-colors">
                        My appointments
                      </MenubarItem>
                    </Link>
                  )}

                  <MenubarSeparator className="bg-[#F1E4E4]" />

                  <form
                    action={async () => {
                      "use server";
                      await signOut("google");
                    }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-lg px-3 py-2 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Logout
                    </Button>
                  </form>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
            <Link href="/signin">
              <Button className="login-btn bg-[#BE1E3C] text-white hover:bg-[#A5182F] rounded-full px-6">
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