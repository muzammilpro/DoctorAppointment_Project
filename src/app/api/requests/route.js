import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/RequestModal";
import { UserModal } from "@/lib/models/UserModal";

export async function POST(req) {
  await connectDB();
  try {
    const obj = await req.json();

    const isUserRequestedBefore = await RequestModal.findOne({
      user: obj.user,
    });
    console.log("isUserRequestedBefore=>", isUserRequestedBefore);
    if (isUserRequestedBefore) {
      return Response.json(
        {
          error: true,
          msg: "You had already applied as a doctor",
        },
        { status: 403 }
      );
    }

    let newRequest = await new RequestModal({ ...obj });
    newRequest = await newRequest.save();

    return Response.json(
      {
        error: false,
        msg: "Request Registered Successfully",
        request: newRequest,
      },
      { status: 201 }
    );
  } catch (e) {
    return Response.json(
      {
        error: true,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  // console.log(req);
  const query = {};
  const status = req?.nextUrl?.searchParams?.get("status");
  if (status && status != "all") {
    query.status = status;
  }

  const requests = await RequestModal.find(query).populate("user");
  return Response.json(
    {
      error: false,
      msg: "Requests fetched Successfully",
      requests,
    },
    { status: 200 }
  );
}

export async function PUT(req) {
  await connectDB();
  try {
    const { id, status, ...updates } = await req.json();
    const editableFields = ["bio", "hospital", "fees", "gender", "appointmentTime", "degree", "specialization", "experience", "number", "address", "documentBase64", "documentName"];
    const safeUpdates = Object.fromEntries(
      Object.entries(updates).filter(([key]) => editableFields.includes(key))
    );
    const request = await RequestModal.findById(id);

    if (!request) {
      return Response.json({ error: true, msg: "Doctor request was not found" }, { status: 404 });
    }

    if (status) safeUpdates.status = status;
    if (status === "accepted") {
      await UserModal.findByIdAndUpdate(request.user, { role: "doctor" });
    }

    const updated = await RequestModal.findByIdAndUpdate(id, safeUpdates, {
      new: true,
      runValidators: true,
    });

    return Response.json(
      { error: false, msg: "Request updated successfully", request: updated },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { error: true, msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {}
