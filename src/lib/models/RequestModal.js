// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const requestSchema = new Schema({
//   user: { type: mongoose.Types.ObjectId, ref: "Users" },
//   status: {
//     type: String,
//     default: "pending",
//     enum: ["pending", "accepted", "rejected"],
//   },
//   bio: String,
//   hospital: String,
//   fees: String,
//   gender: String,
//   appointmentTime: String,
//   degree: String,
//   specialization: String,
//   experience: String,
//   number: String,
//   address: String,
// });

// export const RequestModal =
//   mongoose.models.Requests || mongoose.model("Requests", requestSchema);


import mongoose from "mongoose";

const { Schema } = mongoose;

const requestSchema = new Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
    bio: String,
    hospital: String,
    fees: String,
    gender: String,
    appointmentTime: String,
    degree: String,
    specialization: String,
    experience: String,
    number: String,
    address: String,
    documentBase64: {
      type: String,
      default: "",
    },
    documentName: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const RequestModal =
  mongoose.models.Requests || mongoose.model("Requests", requestSchema);