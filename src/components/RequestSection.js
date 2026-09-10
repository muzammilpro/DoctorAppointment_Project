"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateRequest } from "@/actions/requests";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import DoctorCard from "./DoctorCard";

const fields = [
  ["hospital", "Hospital"],
  ["fees", "Consultation fee"],
  ["degree", "Degree"],
  ["specialization", "Specialization"],
  ["experience", "Experience"],
  ["gender", "Gender"],
  ["appointmentTime", "Appointment time", "time"],
  ["number", "Contact number"],
  ["address", "Address"],
];

export default function DoctorRequests({ requests, status }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState({ type: null, requestId: null });
  const [editingRequest, setEditingRequest] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [activeFilter, setActiveFilter] = useState(status || "all");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleAction = (type, requestId) => {
    setSelectedAction({ type, requestId });
    setDialogOpen(true);
  };

  const confirmAction = async () => {
    setIsSaving(true);
    const response = await updateRequest(
      selectedAction.requestId,
      selectedAction.type === "accept" ? "accepted" : "rejected"
    );
    setIsSaving(false);
    if (!response?.error) {
      setDialogOpen(false);
      router.refresh();
    }
  };

  const openEdit = (request) => {
    setEditingRequest(request);
    setFormValues({
      ...Object.fromEntries(fields.map(([name]) => [name, request[name] || ""])),
      bio: request.bio || "",
      status: request.status || "pending",
    });
    setEditOpen(true);
  };

  const saveEdit = async () => {
    setIsSaving(true);
    const response = await updateRequest(editingRequest._id, formValues);
    setIsSaving(false);
    if (!response?.error) {
      setEditOpen(false);
      setEditingRequest(null);
      router.refresh();
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (activeFilter && activeFilter !== "all") params.set("status", activeFilter);
    else params.delete("status");
    params.set("page", "1");
    params.set("limit", "30");
    router.replace(`${pathname}?${params.toString()}`);
  }, [activeFilter, pathname, router, searchParams]);

  return (
    <>
      <div className="grid w-full gap-4 md:w-1/2 mx-auto grid-cols-4">
        {["all", "pending", "accepted", "rejected"].map((filter) => (
          <button
            key={filter}
            type="button"
            className={`border-secondory cursor-pointer p-3 my-4 text-center border rounded capitalize ${activeFilter === filter ? "bg-primary text-white" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {requests.map((request) => (
          <DoctorCard
            key={request._id}
            request={request}
            isAdmin
            onEdit={() => openEdit(request)}
            onAccept={() => handleAction("accept", request._id)}
            onReject={() => handleAction("reject", request._id)}
          />
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>Are you sure you want to {selectedAction.type} this doctor request?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)} disabled={isSaving}>Cancel</Button>
            <Button onClick={confirmAction} disabled={isSaving}>{isSaving ? "Saving..." : "Confirm"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit doctor request</DialogTitle>
            <DialogDescription>Update the doctor&apos;s request details at any time.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2">
            {fields.map(([name, label, type]) => (
              <div key={name} className={name === "address" ? "sm:col-span-2" : ""}>
                <Label htmlFor={`request-${name}`}>{label}</Label>
                <Input
                  id={`request-${name}`}
                  type={type || "text"}
                  value={formValues[name] || ""}
                  onChange={(event) => setFormValues((values) => ({ ...values, [name]: event.target.value }))}
                />
              </div>
            ))}
            <div>
              <Label htmlFor="request-status">Status</Label>
              <select
                id="request-status"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                value={formValues.status || "pending"}
                onChange={(event) => setFormValues((values) => ({ ...values, status: event.target.value }))}
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="request-bio">Bio</Label>
              <Textarea
                id="request-bio"
                value={formValues.bio || ""}
                onChange={(event) => setFormValues((values) => ({ ...values, bio: event.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)} disabled={isSaving}>Cancel</Button>
            <Button onClick={saveEdit} disabled={isSaving}>{isSaving ? "Saving..." : "Save changes"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}