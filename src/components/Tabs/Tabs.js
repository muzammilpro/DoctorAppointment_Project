"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function AppointmentFilterTabs({ status }) {
  const [activeFilter, setActiveFilter] = useState(status || null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    if (!searchParams || !pathname || !replace) return;
    
    const params = new URLSearchParams(searchParams.toString());
    if (activeFilter) {
      params.set("status", activeFilter);
    } else {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [activeFilter, searchParams, pathname, replace]);

  return (
    <>
      <div className="container grid w-full gap-2 md:gap-4 md:w-full lg:w-3/4 mx-auto grid-cols-2 md:grid-cols-5">
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter === "pending" ? "bg-primary text-center text-white" : ""
          }`}
          value="pending"
          onClick={() => setActiveFilter("pending")}
        >
          Pending
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter === "accepted" ? "bg-primary text-center text-white" : ""
          }`}
          value="accepted"
          onClick={() => setActiveFilter("accepted")}
        >
          Accepted
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter === "cancelled" ? "bg-primary text-center text-white" : ""
          }`}
          value="cancelled"
          onClick={() => setActiveFilter("cancelled")}
        >
          Rejected
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter === "upcoming" ? "bg-primary text-center text-white" : ""
          }`}
          value="upcoming"
          onClick={() => setActiveFilter("upcoming")}
        >
          Upcoming
        </div>
        <div
          className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded ${
            activeFilter === "past" ? "bg-primary text-center text-white" : ""
          }`}
          value="past"
          onClick={() => setActiveFilter("past")}
        >
          Past
        </div>
      </div>
    </>
  );
}
