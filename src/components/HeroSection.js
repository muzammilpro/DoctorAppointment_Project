import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "../../auth";

export default async function HeroSection() {
  const session = await auth();
  return (
    // <section className="text-gray-600 my-10 body-font">
    //   <div className="container mx-auto flex  md:flex-row flex-col items-center">
    //     <div className="lg:flex-grow md:w-3/4  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //       <h1 className="font-semibold sm:text-2xl text-xl mb-4 text-gray-900">
    //         DOCTOR APPOINTMENT SYSTEM
    //         <br className="hidden lg:inline-block" />
    //         {/* BY BATCH-11 */}
    //       </h1>
    //       <p className="mb-8 leading-relaxed">
    //         Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
    //         plant cold-pressed tacos poke beard tote bag. Heirloom echo park
    //         mlkshk tote bag selvage hot chicken authentic tumeric truffaut
    //         hexagon try-hard chambray.
    //       </p>
    //       <div className="flex gap-4 justify-center">
    //         <Button variant="outline">Find Doctor You Need</Button>
    //         <Link href={session ? "/doctors/apply" : "/signin"}>
    //           <Button>Apply as Doctor</Button>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
    //       <Image
    //         className="object-cover object-center rounded"
    //         alt="hero"
    //         height={400}
    //         width={400}
    //         src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
    //       />
    //     </div>
    //   </div>
    // </section>



    // <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 bg-white overflow-hidden">
    //   {/* Left Text Content */}
    //   <div className="flex-1 text-center md:text-left">
    //     <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
    //       Book Your <br />
    //       <span className="text-pink-500">Appointment</span> <br />
    //       With Trusted <br />
    //       Doctors
    //     </h1>

    //     <p className="text-gray-700 mt-6 text-base md:text-lg">
    //       Browse our extensive list of highly qualified doctors & <br className="hidden md:block" />
    //       schedule your <br className="block md:hidden" />
    //       appointment with ease.
    //     </p>

    //     {/* Features */}
    //     <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6 text-sm md:text-base">
    //       <div className="flex items-center gap-2 text-pink-600 font-medium">
    //         <span>👨‍⚕️</span>
    //         <span>100+ Certified Doctors</span>
    //       </div>
    //       <div className="flex items-center gap-2 text-pink-600 font-medium">
    //         <span>📅</span>
    //         <span>Instant Booking Available</span>
    //       </div> 

    //     </div>
    //     <br />
    //     <div className="flex gap-4 justify-center">
    //         <Button variant="outline">Find Doctor You Need</Button>
    //         <Link href={session ? "/doctors/apply" : "/signin"}>
    //           <Button>Apply as Doctor</Button>
    //         </Link>
    //       </div>
    //   </div>

    //   {/* Right Image */}
    //   <div className="flex-1 flex justify-center">
    //     <div className="w-[280px] sm:w-[360px] md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-[4/3] overflow-hidden rounded-[100%_40%_60%_100%/70%_60%_40%_30%]">
    //       <Image
    //         src="/doctor-hero.jpeg" // ✅ Place the image in `/public/doctor-hero.png`
    //         alt="Stethoscope on medical report"
    //         width={600}
    //         height={400}
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //   </div>
    // </section>


    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 bg-white overflow-hidden">
      {/* Left Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
          Book Your <br />
          <span className="text-pink-500">Appointment</span> <br />
          With Trusted <br />
          Doctors
        </h1>

        <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
          Browse our extensive list of highly qualified doctors &nbsp;
          <br className="hidden md:block" />
          schedule your
          <br className="block md:hidden" />
          appointment with ease.
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6 text-sm md:text-base">
          <div className="flex items-center gap-2 text-pink-600 font-medium">
            <span>👨‍⚕️</span>
            <span>100+ Certified Doctors</span>
          </div>
          <div className="flex items-center gap-2 text-pink-600 font-medium">
            <span>📅</span>
            <span>Instant Booking Available</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start mt-8 flex-wrap">
          
      
          <Link href={session ? "/doctors/apply" : "/signin"}>
            <Button>Apply as Doctor</Button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-[280px] sm:w-[360px] md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-[4/3] overflow-hidden rounded-[100%_40%_60%_100%/70%_60%_40%_30%] shadow-xl">
          <Image
            src="/doctor-hero.jpeg"
            alt="Stethoscope on medical report"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

  );
}
