// "use server";

// import { revalidatePath } from "next/cache";

// export async function addAppointment(data) {
//   let add = await fetch(`${process.env.BASE_URL}api/appointment`, {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
//   add = add.json();

//   return add;
// }

// export async function getAppointments(role, id, status = "pending") {
//   let url;
//   if (role == "user") {
//     url = `${process.env.BASE_URL}api/appointment?user=${id}&status=${status}`;
//   } else {
//     url = `${process.env.BASE_URL}api/appointment?doctor=${id}&status=${status}`;
//   }
//   let appointments = await fetch(url, {
//     cache: "no-cache",
//   });
//   appointments = appointments.json();

//   return appointments;
// }

// export async function updateAppointment(id, status) {
//   let update = await fetch(`${process.env.BASE_URL}api/appointment`, {
//     method: "PUT",
//     body: JSON.stringify({ id, status }),
//   });

//   update = await update.json();
//   revalidatePath("/appointments");
//   return update;
// }

// export async function rescheduleAppointment(id, date) {
//   try {
//     let update = await fetch(`${process.env.BASE_URL}api/appointment/reschedule`, {
//       method: "PUT",
//       body: JSON.stringify({ id, date }),
//     });
    
//     update = await update.json();
//     revalidatePath("/appointments");
//     return update;
//   } catch (error) {
//     console.error("Error rescheduling appointment:", error);
//     return { success: false, message: "Failed to reschedule appointment" };
//   }
// }



"use server";

import { revalidatePath } from "next/cache";

async function safeJson(res) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse JSON response:", text);
    return null;
  }
}

export async function addAppointment(data) {
  try {
    const res = await fetch(`${process.env.BASE_URL}api/appointment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await safeJson(res);

    if (!res.ok) {
      console.error("addAppointment failed:", res.status, result);
      return { success: false, message: result?.message || "Failed to add appointment" };
    }

    revalidatePath("/appointments");
    return result ?? { success: false, message: "Empty response from server" };
  } catch (error) {
    console.error("Error adding appointment:", error);
    return { success: false, message: "Failed to add appointment" };
  }
}

export async function getAppointments(role, id, status = "pending") {
  try {
    let url;
    if (role === "user") {
      url = `${process.env.BASE_URL}api/appointment?user=${id}&status=${status}`;
    } else {
      url = `${process.env.BASE_URL}api/appointment?doctor=${id}&status=${status}`;
    }

    const res = await fetch(url, {
      cache: "no-cache",
    });

    const result = await safeJson(res);

    if (!res.ok || !result) {
      console.error("getAppointments failed:", res.status, result);
      return { appointments: [], stats: { pending: 0, accepted: 0, cancelled: 0 } };
    }

    return {
      appointments: result.appointments ?? [],
      stats: result.stats ?? { pending: 0, accepted: 0, cancelled: 0 },
    };
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return { appointments: [], stats: { pending: 0, accepted: 0, cancelled: 0 } };
  }
}

export async function updateAppointment(id, status) {
  try {
    const res = await fetch(`${process.env.BASE_URL}api/appointment`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    const result = await safeJson(res);

    if (!res.ok) {
      console.error("updateAppointment failed:", res.status, result);
      revalidatePath("/appointments");
      return { success: false, message: result?.message || "Failed to update appointment" };
    }

    revalidatePath("/appointments");
    return result ?? { success: false, message: "Empty response from server" };
  } catch (error) {
    console.error("Error updating appointment:", error);
    return { success: false, message: "Failed to update appointment" };
  }
}

export async function rescheduleAppointment(id, date) {
  try {
    const res = await fetch(`${process.env.BASE_URL}api/appointment/reschedule`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, date }),
    });

    const result = await safeJson(res);

    if (!res.ok) {
      console.error("rescheduleAppointment failed:", res.status, result);
      revalidatePath("/appointments");
      return { success: false, message: result?.message || "Failed to reschedule appointment" };
    }

    revalidatePath("/appointments");
    return result ?? { success: false, message: "Empty response from server" };
  } catch (error) {
    console.error("Error rescheduling appointment:", error);
    return { success: false, message: "Failed to reschedule appointment" };
  }
}