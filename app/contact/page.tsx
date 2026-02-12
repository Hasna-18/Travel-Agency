// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// export default function ContactPage() {
//     return (
//         <main className="pt-32 pb-24">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//                     {/* Contact Information */}
//                     <div>
//                         <motion.h1
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             className="text-5xl md:text-7xl font-black text-slate-900 mb-8"
//                         >
//                             Get in <span className="text-slate-400">Touch.</span>
//                         </motion.h1>
//                         <p className="text-xl text-slate-500 leading-relaxed mb-12">
//                             Have a destination in mind or need expert advice? Our travel consultants are ready to help you plan your next masterpiece.
//                         </p>

//                         <div className="space-y-8">
//                             <ContactInfoItem
//                                 icon={<Mail className="w-6 h-6 text-slate-900" />}
//                                 title="Email Us"
//                                 content="concierge@luxetravel.com"
//                             />
//                             <ContactInfoItem
//                                 icon={<Phone className="w-6 h-6 text-slate-900" />}
//                                 title="Call Us"
//                                 content="+1 (234) 567-8900"
//                             />
//                             <ContactInfoItem
//                                 icon={<MapPin className="w-6 h-6 text-slate-900" />}
//                                 title="Visit Us"
//                                 content="123 Luxury Way, Beverly Hills, CA 90210"
//                             />
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm"
//                     >
//                         <form className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-bold text-slate-900 mb-2">First Name</label>
//                                     <input
//                                         type="text"
//                                         placeholder="John"
//                                         className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-bold text-slate-900 mb-2">Last Name</label>
//                                     <input
//                                         type="text"
//                                         placeholder="Doe"
//                                         className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
//                                 <input
//                                     type="email"
//                                     placeholder="john@example.com"
//                                     className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
//                                 <textarea
//                                     rows={5}
//                                     placeholder="Tell us about your dream trip..."
//                                     className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all resize-none"
//                                 ></textarea>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg"
//                             >
//                                 Send Message <Send className="w-5 h-5" />
//                             </button>
//                         </form>
//                     </motion.div>
//                 </div>
//             </div>
//         </main>
//     );
// }

// function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
//     return (
//         <div className="flex gap-6 items-start">
//             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm flex-shrink-0">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
//                 <p className="text-slate-500">{content}</p>
//             </div>
//         </div>
//     );
// }



"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white pt-32 pb-24 overflow-hidden min-h-screen">
            {/* Background Subtle Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Side: Contact Information */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                                Connect With Us
                            </span>
                            <h1 className="text-6xl md:text-7xl font-serif italic text-slate-900 mb-8 leading-tight">
                                Let’s Plan Your <br />
                                <span className="text-blue-600 not-italic font-sans font-black">Next Adventure.</span>
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg">
                                Whether you’re dreaming of a Kerala backwater escape or a global expedition, our experts at Future Fly are ready to help.
                            </p>

                            <div className="grid gap-8">
                                <ContactInfoItem
                                    icon={<Phone className="w-6 h-6 text-blue-600" />}
                                    title="Call Our Experts"
                                    content="(+91) 8606904047"
                                    subtext="Mon - Sat, 9am - 6pm"
                                />
                                <ContactInfoItem
                                    icon={<Mail className="w-6 h-6 text-blue-600" />}
                                    title="Email Us"
                                    content="futureflytravels369@gmail.com"
                                    subtext="We reply within 24 hours"
                                />
                                <ContactInfoItem
                                    icon={<MapPin className="w-6 h-6 text-blue-600" />}
                                    title="Visit Our Office"
                                    content="Shop No.06, Attipra Zonal Office Building"
                                    subtext="Kulathoor, Trivandrum, Kerala"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Form Card */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91"
                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Dream Destination</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Where would you like to go?"
                                        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center gap-3 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-slate-200 group"
                                >
                                    Send Inquiry
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -bottom-10 -right-10 w-full h-full border border-slate-100 rounded-[3rem] -z-10" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

function ContactInfoItem({ icon, title, content, subtext }: { icon: React.ReactNode, title: string, content: string, subtext: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm flex-shrink-0 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-all">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-0.5">{title}</h4>
                <p className="text-blue-600 font-medium text-lg mb-0.5">{content}</p>
                <p className="text-slate-400 text-sm">{subtext}</p>
            </div>
        </div>
    );
}