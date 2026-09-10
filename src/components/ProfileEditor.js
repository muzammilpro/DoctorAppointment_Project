"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateMyProfile } from "@/actions/profile";

const doctorFields = [["hospital", "Hospital"], ["fees", "Consultation fee"], ["degree", "Degree"], ["specialization", "Specialization"], ["experience", "Experience"], ["gender", "Gender"], ["appointmentTime", "Appointment time", "time"], ["number", "Phone number"], ["address", "Address"]];

export default function ProfileEditor({ user, request }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({ firstName: user.firstName || "", lastName: user.lastName || "", picture: user.picture || "", ...Object.fromEntries(doctorFields.map(([name]) => [name, request?.[name] || ""])), bio: request?.bio || "" });
  const isDoctor = Boolean(request);
  const name = `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User";
  const setValue = (name, value) => setValues((current) => ({ ...current, [name]: value }));
  const saveProfile = () => { setMessage(""); startTransition(async () => { const result = await updateMyProfile(values); if (result.error) setMessage(result.msg); else window.location.reload(); }); };
  return <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6"><div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"><div className="flex flex-col md:flex-row"><div className="md:w-1/3 bg-indigo-600 p-6 text-white flex flex-col items-center justify-center">{user.picture ? <Image src={user.picture} alt={name} width={150} height={150} className="rounded-full border-4 border-white shadow-md" /> : <div className="w-[150px] h-[150px] rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold">{name.charAt(0)}</div>}<h2 className="text-2xl font-bold mt-4">{isDoctor ? "Dr. " : ""}{name}</h2><p className="text-sm mt-1 italic">{request?.specialization || user.role}</p>{request && <p className="mt-2 bg-white text-indigo-600 px-4 py-1 rounded-full text-xs font-semibold capitalize">Status: {request.status}</p>}</div><div className="md:w-2/3 p-6 space-y-4"><div className="flex items-center justify-between gap-4"><div><h3 className="text-xl font-semibold text-gray-800">Your Profile</h3><p className="text-sm text-gray-500">{user.email}</p></div><Button onClick={() => setOpen(true)}>Edit profile</Button></div>{request ? <><p className="text-gray-600">{request.bio}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{doctorFields.map(([name, label]) => <Detail key={name} label={label} value={request[name]} />)}</div></> : <p className="text-gray-600">Manage your name and profile photo whenever you need to.</p>}</div></div></div><Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"><DialogHeader><DialogTitle>Edit your profile</DialogTitle><DialogDescription>Your account email and role cannot be changed here.</DialogDescription></DialogHeader><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2"><Field label="First name" name="firstName" values={values} setValue={setValue} /><Field label="Last name" name="lastName" values={values} setValue={setValue} /><div className="sm:col-span-2"><Field label="Profile photo URL" name="picture" values={values} setValue={setValue} /></div>{isDoctor && doctorFields.map(([name, label, type]) => <Field key={name} label={label} name={name} type={type} values={values} setValue={setValue} />)}{isDoctor && <div className="sm:col-span-2"><Label htmlFor="profile-bio">Bio</Label><Textarea id="profile-bio" value={values.bio} onChange={(e) => setValue("bio", e.target.value)} /></div>}</div>{message && <p className="text-sm text-red-600">{message}</p>}<DialogFooter><Button variant="outline" onClick={() => setOpen(false)} disabled={isPending}>Cancel</Button><Button onClick={saveProfile} disabled={isPending}>{isPending ? "Saving..." : "Save changes"}</Button></DialogFooter></DialogContent></Dialog></div>;
}
function Field({ label, name, type, values, setValue }) { return <div><Label htmlFor={`profile-${name}`}>{label}</Label><Input id={`profile-${name}`} type={type || "text"} value={values[name]} onChange={(e) => setValue(name, e.target.value)} /></div>; }
function Detail({ label, value }) { return <div><p className="text-sm text-gray-500">{label}</p><p className="font-medium text-gray-800">{value || "—"}</p></div>; }