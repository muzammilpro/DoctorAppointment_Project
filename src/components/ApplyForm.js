// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { addRequest } from "@/actions/requests";
// import { useToast } from "@/hooks/use-toast";

// const formSchema = z.object({
//   bio: z.string().min(2).max(120),
//   hospital: z.string().min(2).max(50),
//   fees: z.string(),
//   gender: z.string(),
//   appointmentTime: z.string(),
//   degree: z.string(),
//   specialization: z.string(),
//   experience: z.string(),
//   number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
//   address: z.string().min(5),
// });

// export default function DoctorForm({ session }) {
//   const { toast } = useToast();
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       bio: "",
//       hospital: "",
//       fees: "",
//       gender: "",
//       appointmentTime: "",
//       degree: "",
//       specialization: "",
//       experience: "",
//       number: "",
//       address: "",
//     },
//   });

//   async function onSubmit(values) {
//     console.log(values);
//     values.user = session.user._id;
//     console.log("values=>", values);
//     const response = await addRequest(values);
//     console.log("response=>", response);
//     if (response.error) {
//       form.reset();
//       toast({
//         title: "Sorry , Your application cannot be submitted.",
//         description: response.msg,
//       });
//     } else {
//       form.reset();
//       toast({
//         title: "Your application is submitted.",
//         description: "You get response in 3 business days.",
//       });
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 m-2 lg:grid-cols-2 gap-5">
//           <FormField
//             name="hospital"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Hospital</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter hospital name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="fees"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Fees</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter fees" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="gender"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Gender</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter gender" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="appointmentTime"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Appointment Time</FormLabel>
//                 <FormControl>
//                   <Input type="time" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="degree"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Degree</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter degree" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="specialization"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Specialization</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter specialization" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="experience"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Experience</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter years of experience" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="number"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Contact Number</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter contact number" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="address"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Address</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter address" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <FormField
//           name="bio"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Bio</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Enter bio" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">
//           {form.formState.isSubmitting ? "Loading" : "Submit"}
//         </Button>
//       </form>
//     </Form>
//   );
// }


// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { addRequest } from "@/actions/requests";
// import { useToast } from "@/hooks/use-toast";

// const formSchema = z.object({
//   bio: z.string().min(2).max(120),
//   hospital: z.string().min(2).max(50),
//   fees: z.string(),
//   gender: z.string(),
//   appointmentTime: z.string(),
//   degree: z.string(),
//   specialization: z.string(),
//   experience: z.string(),
//   number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
//   address: z.string().min(5),
// });

// export default function DoctorForm({ session }) {
//   const { toast } = useToast();
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       bio: "",
//       hospital: "",
//       fees: "",
//       gender: "",
//       appointmentTime: "",
//       degree: "",
//       specialization: "",
//       experience: "",
//       number: "",
//       address: "",
//     },
//   });

//   async function onSubmit(values) {
//     console.log(values);
//     values.user = session.user._id;
//     console.log("values=>", values);
//     const response = await addRequest(values);
//     console.log("response=>", response);
//     if (response.error) {
//       form.reset();
//       toast({
//         title: "Sorry , Your application cannot be submitted.",
//         description: response.msg,
//       });
//     } else {
//       form.reset();
//       toast({
//         title: "Your application is submitted.",
//         description: "You get response in 3 business days.",
//       });
//     }
//   }

//   const fields = [
//     { name: "hospital", label: "Hospital", placeholder: "Enter hospital name" },
//     { name: "fees", label: "Fees", placeholder: "Enter fees" },
//     { name: "gender", label: "Gender", placeholder: "Enter gender" },
//     { name: "appointmentTime", label: "Appointment Time", type: "time" },
//     { name: "degree", label: "Degree", placeholder: "Enter degree" },
//     { name: "specialization", label: "Specialization", placeholder: "Enter specialization" },
//     { name: "experience", label: "Experience", placeholder: "Enter years of experience" },
//     { name: "number", label: "Contact Number", placeholder: "Enter contact number" },
//     { name: "address", label: "Address", placeholder: "Enter address" },
//   ];

//   return (
//     <div className="relative w-full max-w-4xl mx-auto p-4 sm:p-8">
//       {/* Ambient background glow */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
//         <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-pulse-slow" />
//         <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl animate-pulse-slow [animation-delay:1.5s]" />
//       </div>

//       <div
//         className="relative rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_40px_-8px_rgba(30,41,59,0.25)] p-6 sm:p-10 animate-fade-in-up"
//       >
//         {/* Header */}
//         <div className="mb-8 text-center sm:text-left">
//           <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
//             Doctor Application
//           </h2>
//           <p className="mt-1 text-sm text-slate-500">
//             Fill in your professional details to get listed on the platform.
//           </p>
//           <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
//         </div>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
//               {fields.map((f, i) => (
//                 <FormField
//                   key={f.name}
//                   name={f.name}
//                   control={form.control}
//                   render={({ field }) => (
//                     <FormItem
//                       className="group animate-fade-in-up"
//                       style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
//                     >
//                       <FormLabel className="text-sm font-medium text-slate-700 transition-colors group-focus-within:text-indigo-600">
//                         {f.label}
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           type={f.type || "text"}
//                           placeholder={f.placeholder}
//                           {...field}
//                           className="h-11 rounded-xl border-slate-200 bg-white/80 shadow-sm transition-all duration-200 ease-out placeholder:text-slate-400 hover:border-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:border-indigo-400 focus-visible:shadow-md"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               ))}
//             </div>

//             <FormField
//               name="bio"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem
//                   className="group animate-fade-in-up"
//                   style={{ animationDelay: `${fields.length * 60}ms`, animationFillMode: "backwards" }}
//                 >
//                   <FormLabel className="text-sm font-medium text-slate-700 transition-colors group-focus-within:text-indigo-600">
//                     Bio
//                   </FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Enter bio"
//                       {...field}
//                       className="min-h-[120px] rounded-xl border-slate-200 bg-white/80 shadow-sm transition-all duration-200 ease-out placeholder:text-slate-400 hover:border-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:border-indigo-400 focus-visible:shadow-md"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="pt-2 flex justify-center sm:justify-end">
//               <Button
//                 type="submit"
//                 disabled={form.formState.isSubmitting}
//                 className="relative h-11 min-w-[160px] rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all duration-200 ease-out hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
//               >
//                 {form.formState.isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
//                     Loading
//                   </span>
//                 ) : (
//                   "Submit"
//                 )}
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>

//       <style jsx global>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(12px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.5s ease-out;
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 0.9; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { addRequest } from "@/actions/requests";
// import { useToast } from "@/hooks/use-toast";

// import {
//   Building2,
//   DollarSign,
//   Clock,
//   GraduationCap,
//   Stethoscope,
//   Briefcase,
//   Phone,
//   MapPin,
//   FileText,
//   User,
//   UploadCloud,
//   CheckCircle2,
//   FileCheck,
//   X,
//   Sparkles,
//   ShieldCheck,
//   Loader2,
// } from "lucide-react";

// const formSchema = z.object({
//   bio: z.string().min(2, "Bio must be at least 2 characters").max(120, "Bio cannot exceed 120 characters"),
//   hospital: z.string().min(2, "Hospital name required").max(50),
//   fees: z.string().min(1, "Fees required"),
//   gender: z.string().min(1, "Please select gender"),
//   appointmentTime: z.string().min(1, "Please set appointment hours"),
//   degree: z.string().min(2, "Degree required"),
//   specialization: z.string().min(2, "Specialization required"),
//   experience: z.string().min(1, "Experience required"),
//   number: z.string().regex(/^\d+$/, "Enter a valid phone number with digits only"),
//   address: z.string().min(5, "Address must be at least 5 characters"),
// });

// const SPECIALTY_OPTIONS = [
//   "Cardiology",
//   "Dermatology",
//   "Pediatrics",
//   "Neurology",
//   "Orthopedics",
//   "General Medicine",
// ];

// export default function DoctorForm({ session }) {
//   const { toast } = useToast();
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       bio: "",
//       hospital: "",
//       fees: "",
//       gender: "",
//       appointmentTime: "",
//       degree: "",
//       specialization: "",
//       experience: "",
//       number: "",
//       address: "",
//     },
//     mode: "onBlur",
//   });

//   const onDrop = useCallback(
//     (acceptedFiles) => {
//       if (acceptedFiles?.length > 0) {
//         setUploadedFile(acceptedFiles[0]);
//         toast({
//           title: "Document attached",
//           description: `${acceptedFiles[0].name} (${(acceptedFiles[0].size / 1024).toFixed(1)} KB)`,
//         });
//       }
//     },
//     [toast]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     maxFiles: 1,
//     maxSize: 5 * 1024 * 1024,
//     accept: {
//       "application/pdf": [".pdf"],
//       "image/jpeg": [".jpg", ".jpeg"],
//       "image/png": [".png"],
//     },
//   });

//   async function onSubmit(values) {
//     values.user = session?.user?._id;
//     if (uploadedFile) {
//       values.documentName = uploadedFile.name;
//     }

//     const response = await addRequest(values);

//     if (response?.error) {
//       form.reset();
//       setUploadedFile(null);
//       toast({
//         title: "Sorry, Your application cannot be submitted.",
//         description: response.msg,
//         variant: "destructive",
//       });
//     } else {
//       form.reset();
//       setUploadedFile(null);
//       toast({
//         title: "Your application is submitted.",
//         description: "You get response in 3 business days.",
//       });
//     }
//   }

//   const bioValue = form.watch("bio") || "";

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Header Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-6 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between"
//       >
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
//             <ShieldCheck className="w-5 h-5" />
//           </div>
//           <div>
//             <h2 className="text-base font-bold text-slate-900 tracking-tight">
//               Doctor Registration & Practice Accreditation
//             </h2>
//             <p className="text-xs text-slate-500">
//               Provide your clinical credentials, operating hours, and consultation rates
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           {/* Card 1: Clinical Practice & Fees */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2 }}
//             className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
//           >
//             <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
//               <Building2 className="w-4 h-4 text-sky-600" />
//               <h3 className="text-sm font-bold">Hospital & Consultation</h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <FormField
//                 name="hospital"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Hospital</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="Enter hospital name" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="fees"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Fees</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="Enter fees (e.g. $120)" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </motion.div>

//           {/* Card 2: Professional Qualifications */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.05 }}
//             className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
//           >
//             <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
//               <Stethoscope className="w-4 h-4 text-indigo-600" />
//               <h3 className="text-sm font-bold">Credentials & Specialization</h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//               <FormField
//                 name="degree"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Degree</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="e.g. MBBS, MD" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="specialization"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Specialization</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="e.g. Cardiology" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="experience"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Experience</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="e.g. 8 years" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             {/* Quick Specialty Selector */}
//             <div className="pt-1">
//               <span className="text-[11px] font-medium text-slate-400 block mb-2">
//                 Quick select popular specializations:
//               </span>
//               <div className="flex flex-wrap gap-1.5">
//                 {SPECIALTY_OPTIONS.map((spec) => (
//                   <button
//                     key={spec}
//                     type="button"
//                     onClick={() => form.setValue("specialization", spec, { shouldValidate: true })}
//                     className="text-xs px-2.5 py-1 rounded-lg border border-slate-200/80 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
//                   >
//                     {spec}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 3: Gender & Appointment Time */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.1 }}
//             className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
//           >
//             <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
//               <Clock className="w-4 h-4 text-emerald-600" />
//               <h3 className="text-sm font-bold">Schedule & Demographics</h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <FormField
//                 name="gender"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Gender</FormLabel>
//                     <Select onValueChange={field.onChange} value={field.value}>
//                       <FormControl>
//                         <SelectTrigger className="pl-10 relative">
//                           <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                           <SelectValue placeholder="Select gender" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="Female">Female</SelectItem>
//                         <SelectItem value="Male">Male</SelectItem>
//                         <SelectItem value="Non-binary">Non-binary</SelectItem>
//                         <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="appointmentTime"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Appointment Time</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                         <Input type="time" className="pl-10" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </motion.div>

//           {/* Card 4: Contact & Practice Address */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.15 }}
//             className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
//           >
//             <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
//               <MapPin className="w-4 h-4 text-amber-600" />
//               <h3 className="text-sm font-bold">Contact & Location</h3>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <FormField
//                 name="number"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Contact Number</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="e.g. 5550192834" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 name="address"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Clinic Address</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                         <Input className="pl-10" placeholder="e.g. 140 Medical Plaza Blvd" {...field} />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </motion.div>

//           {/* Card 5: Verification Document Dropzone */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.2 }}
//             className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-4"
//           >
//             <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
//               <FileCheck className="w-4 h-4 text-teal-600" />
//               <h3 className="text-sm font-bold">Medical License or ID Document</h3>
//             </div>

//             {!uploadedFile ? (
//               <div
//                 {...getRootProps()}
//                 className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
//                   isDragActive
//                     ? "border-sky-500 bg-sky-50/60"
//                     : "border-slate-200 hover:border-sky-300 hover:bg-slate-50/60"
//                 }`}
//               >
//                 <input {...getInputProps()} />
//                 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
//                   <UploadCloud className="w-5 h-5 text-sky-600" />
//                 </div>
//                 <p className="text-sm font-semibold text-slate-800">
//                   {isDragActive ? "Drop verification file here" : "Click to upload or drag & drop"}
//                 </p>
//                 <p className="text-xs text-slate-400">PDF, JPG, PNG up to 5MB</p>
//               </div>
//             ) : (
//               <div className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/70">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle2 className="w-5 h-5 text-emerald-600" />
//                   <div>
//                     <p className="text-sm font-semibold text-emerald-950">{uploadedFile.name}</p>
//                     <p className="text-xs text-emerald-700">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => setUploadedFile(null)}
//                   className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
//             )}
//           </motion.div>

//           {/* Card 6: Biography */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.25 }}
//             className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-4"
//           >
//             <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-slate-800">
//               <div className="flex items-center gap-2">
//                 <FileText className="w-4 h-4 text-sky-600" />
//                 <h3 className="text-sm font-bold">Doctor Bio</h3>
//               </div>
//               <span className={`text-xs font-mono font-medium ${bioValue.length > 120 ? "text-rose-600 font-bold" : "text-slate-400"}`}>
//                 {bioValue.length}/120
//               </span>
//             </div>

//             <FormField
//               name="bio"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Bio</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Brief medical background and clinical philosophy (min 2, max 120 characters)"
//                       className="min-h-[96px] resize-y"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>Shown on your public doctor profile for patient bookings.</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </motion.div>

//           {/* Submit Actions */}
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => {
//                 form.reset();
//                 setUploadedFile(null);
//               }}
//               disabled={form.formState.isSubmitting}
//             >
//               Reset
//             </Button>

//             <Button
//               type="submit"
//               disabled={form.formState.isSubmitting}
//               className="bg-slate-900 hover:bg-slate-800 text-white min-w-[160px] h-11 px-6 rounded-xl shadow-md shadow-slate-900/10 font-semibold"
//             >
//               {form.formState.isSubmitting ? (
//                 <span className="flex items-center gap-2">
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                   Loading...
//                 </span>
//               ) : (
//                 <span className="flex items-center gap-2">
//                   <span>Submit Application</span>
//                   <Sparkles className="w-4 h-4 text-sky-300" />
//                 </span>
//               )}
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }


"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { addRequest } from "@/actions/requests";
import { useToast } from "@/hooks/use-toast";

import {
  Building2,
  DollarSign,
  Clock,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Phone,
  MapPin,
  FileText,
  User,
  UploadCloud,
  CheckCircle2,
  FileCheck,
  X,
  Sparkles,
  ShieldCheck,
  Loader2,
} from "lucide-react";

const formSchema = z.object({
  bio: z.string().min(2, "Bio must be at least 2 characters").max(120, "Bio cannot exceed 120 characters"),
  hospital: z.string().min(2, "Hospital name required").max(50),
  fees: z.string().min(1, "Fees required"),
  gender: z.string().min(1, "Please select gender"),
  appointmentTime: z.string().min(1, "Please set appointment hours"),
  degree: z.string().min(2, "Degree required"),
  specialization: z.string().min(2, "Specialization required"),
  experience: z.string().min(1, "Experience required"),
  number: z.string().regex(/^\d+$/, "Enter a valid phone number with digits only"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

const SPECIALTY_OPTIONS = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Neurology",
  "Orthopedics",
  "General Medicine",
];

// Helper to convert the dropped file to a base64 string
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function DoctorForm({ session }) {
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      hospital: "",
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      address: "",
    },
    mode: "onBlur",
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length > 0) {
        setUploadedFile(acceptedFiles[0]);
        toast({
          title: "Document attached",
          description: `${acceptedFiles[0].name} (${(acceptedFiles[0].size / 1024).toFixed(1)} KB)`,
        });
      }
    },
    [toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  });

  async function onSubmit(values) {
    values.user = session?.user?._id;

    // Convert file to Base64 before sending to server action
    if (uploadedFile) {
      try {
        const base64String = await fileToBase64(uploadedFile);
        values.documentBase64 = base64String;
        values.documentName = uploadedFile.name;
      } catch (err) {
        console.error("Base64 conversion failed", err);
      }
    }

    const response = await addRequest(values);

    if (response?.error) {
      form.reset();
      setUploadedFile(null);
      toast({
        title: "Sorry, Your application cannot be submitted.",
        description: response.msg,
        variant: "destructive",
      });
    } else {
      form.reset();
      setUploadedFile(null);
      toast({
        title: "Your application is submitted.",
        description: "You get response in 3 business days.",
      });
    }
  }

  const bioValue = form.watch("bio") || "";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Doctor Registration & Practice Accreditation
            </h2>
            <p className="text-xs text-slate-500">
              Provide your clinical credentials, operating hours, and consultation rates
            </p>
          </div>
        </div>
      </motion.div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Card 1: Clinical Practice & Fees */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
              <Building2 className="w-4 h-4 text-sky-600" />
              <h3 className="text-sm font-bold">Hospital & Consultation</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                name="hospital"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hospital</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="Enter hospital name" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="fees"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fees</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="Enter fees (e.g. $120)" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Card 2: Professional Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
              <Stethoscope className="w-4 h-4 text-indigo-600" />
              <h3 className="text-sm font-bold">Credentials & Specialization</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <FormField
                name="degree"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="e.g. MBBS, MD" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="specialization"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialization</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="e.g. Cardiology" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="experience"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="e.g. 8 years" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Quick Specialty Selector */}
            <div className="pt-1">
              <span className="text-[11px] font-medium text-slate-400 block mb-2">
                Quick select popular specializations:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SPECIALTY_OPTIONS.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => form.setValue("specialization", spec, { shouldValidate: true })}
                    className="text-xs px-2.5 py-1 rounded-lg border border-slate-200/80 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Gender & Appointment Time */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
              <Clock className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold">Schedule & Demographics</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="pl-10 relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Non-binary">Non-binary</SelectItem>
                        <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="appointmentTime"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Time</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <Input type="time" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Card 4: Contact & Practice Address */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-5"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
              <MapPin className="w-4 h-4 text-amber-600" />
              <h3 className="text-sm font-bold">Contact & Location</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                name="number"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="e.g. 5550192834" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Clinic Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10" placeholder="e.g. 140 Medical Plaza Blvd" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Card 5: Verification Document Dropzone */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-4"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
              <FileCheck className="w-4 h-4 text-teal-600" />
              <h3 className="text-sm font-bold">Medical License or ID Document</h3>
            </div>

            {!uploadedFile ? (
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
                  isDragActive
                    ? "border-sky-500 bg-sky-50/60"
                    : "border-slate-200 hover:border-sky-300 hover:bg-slate-50/60"
                }`}
              >
                <input {...getInputProps()} />
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                  <UploadCloud className="w-5 h-5 text-sky-600" />
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  {isDragActive ? "Drop verification file here" : "Click to upload or drag & drop"}
                </p>
                <p className="text-xs text-slate-400">PDF, JPG, PNG up to 5MB (stored as Base64)</p>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/70">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-950">{uploadedFile.name}</p>
                    <p className="text-xs text-emerald-700">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setUploadedFile(null)}
                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Card 6: Biography */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-600" />
                <h3 className="text-sm font-bold">Doctor Bio</h3>
              </div>
              <span className={`text-xs font-mono font-medium ${bioValue.length > 120 ? "text-rose-600 font-bold" : "text-slate-400"}`}>
                {bioValue.length}/120
              </span>
            </div>

            <FormField
              name="bio"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Brief medical background and clinical philosophy (min 2, max 120 characters)"
                      className="min-h-[96px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Shown on your public doctor profile for patient bookings.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Submit Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                setUploadedFile(null);
              }}
              disabled={form.formState.isSubmitting}
            >
              Reset
            </Button>

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="bg-slate-900 hover:bg-slate-800 text-white min-w-[160px] h-11 px-6 rounded-xl shadow-md shadow-slate-900/10 font-semibold"
            >
              {form.formState.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Submit Application</span>
                  <Sparkles className="w-4 h-4 text-sky-300" />
                </span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}