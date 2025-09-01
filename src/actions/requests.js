"use server";

import { revalidatePath } from "next/cache";

export async function addRequest(data) {
  let add = await fetch(`${process.env.BASE_URL}api/requests`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  add = add.json();

  return add;
}

// export async function getRequest(status) {
//   let requests = await fetch(
//     `${process.env.BASE_URL}api/requests?status=${status ? status : ""}`
//   );
//   requests = requests.json();

//   return requests;
// }

export async function getRequest(status) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}api/requests?status=${status || ""}`
    );

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json(); // ✅ Await the response
    return data;
  } catch (error) {
    console.error("getRequest error:", error);
    return { requests: [] }; // ✅ Return safe fallback to avoid frontend crash
  }
}


export async function getSingleRequest(id) {
  let request = await fetch(`${process.env.BASE_URL}api/requests/${id}`);
  request = request.json();

  return request;
}

export async function updateRequest(id, status) {
  let requests = await fetch(`${process.env.BASE_URL}api/requests`, {
    method: "PUT",
    body: JSON.stringify({ id, status }),
  });
  requests = requests.json();
  revalidatePath("/admin/requests");
  return requests;
}
