"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden min-h-screen">
            {/* Background Subtle Accents */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#CAF0F8]/50 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">

                    {/* Left Side: Contact Information */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#0077B6] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                                Connect With Us
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif italic text-[#0F3D5E] mb-6 sm:mb-8 leading-tight">
                                Let's Plan Your <br />
                                <span className="text-[#0077B6] not-italic font-sans font-black">Next Adventure.</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-10 sm:mb-12 max-w-lg">
                                Whether you're dreaming of a Kerala backwater escape or a global expedition, our experts at Future Fly are ready to help.
                            </p>

                            <div className="grid gap-6 sm:gap-8">
                                <ContactInfoItem
                                    icon={<Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B6]" />}
                                    title="Call Our Experts"
                                    content={[
                                        "+91 9746170832",
                                        "+91 8606904047"
                                    ]}
                                    subtext="Mon - Sat, 9am - 6pm"
                                />

                                <ContactInfoItem
                                    icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B6]" />}
                                    title="Email Us"
                                    content="futureflyglobalventures@gmail.com"
                                    subtext="We reply within 24 hours"
                                />
                                <ContactInfoItem
                                    icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B6]" />}
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
                        <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-[0_30px_100px_rgba(0,119,182,0.08)] border border-[#CAF0F8] relative z-10">
                            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                <div className="w-10 h-10 bg-[#CAF0F8] rounded-full flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-[#0077B6]" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0F3D5E]">Send a Message</h2>
                            </div>

                            <form className="space-y-5 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-[#F1F5F9]/50 border border-[#CAF0F8] rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-[#0F3D5E] focus:outline-none focus:ring-2 focus:ring-[#0077B6]/20 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91"
                                            className="w-full bg-[#F1F5F9]/50 border border-[#CAF0F8] rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-[#0F3D5E] focus:outline-none focus:ring-2 focus:ring-[#0077B6]/20 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="w-full bg-[#F1F5F9]/50 border border-[#CAF0F8] rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-[#0F3D5E] focus:outline-none focus:ring-2 focus:ring-[#0077B6]/20 focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider ml-1">Your Dream Destination</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Where would you like to go?"
                                        className="w-full bg-[#F1F5F9]/50 border border-[#CAF0F8] rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-[#0F3D5E] focus:outline-none focus:ring-2 focus:ring-[#0077B6]/20 focus:bg-white transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-[#0F3D5E] hover:bg-[#0077B6] text-white flex items-center justify-center gap-3 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all shadow-xl group"
                                    style={{ boxShadow: '0 15px 40px rgba(15, 61, 94, 0.2)' }}
                                >
                                    Send Inquiry
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 w-full h-full border border-[#CAF0F8] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] -z-10" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

// function ContactInfoItem({ icon, title, content, subtext }: { icon: React.ReactNode, title: string, content: string, subtext: string }) {
//     return (
//         <div className="flex gap-4 sm:gap-6 items-start group">
//             <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#CAF0F8] shadow-sm flex-shrink-0 group-hover:border-[#00B4D8] group-hover:bg-[#CAF0F8]/30 transition-all">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="font-bold text-[#0F3D5E] mb-0.5">{title}</h4>
//                 <p className="text-[#0077B6] font-medium text-base sm:text-lg mb-0.5">{content}</p>
//                 <p className="text-[#64748B] text-sm">{subtext}</p>
//             </div>
//         </div>
//     );
// }
function ContactInfoItem({
    icon,
    title,
    content,
    subtext
}: {
    icon: React.ReactNode,
    title: string,
    content: string | string[],
    subtext: string
}) {
    return (
        <div className="flex gap-4 sm:gap-6 items-start group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#CAF0F8] shadow-sm flex-shrink-0 group-hover:border-[#00B4D8] group-hover:bg-[#CAF0F8]/30 transition-all">
                {icon}
            </div>

            <div>
                <h4 className="font-bold text-[#0F3D5E] mb-1">{title}</h4>

                <div className="flex flex-col gap-1">
                    {Array.isArray(content) ? (
                        content.map((item, index) => (
                            <a
                                key={index}
                                href={`tel:${item.replace(/\s/g, "")}`}
                                className="text-[#0077B6] font-medium text-base sm:text-lg whitespace-nowrap hover:underline"
                            >
                                {item}
                            </a>
                        ))
                    ) : (
                        <p className="text-[#0077B6] font-medium text-base sm:text-lg whitespace-nowrap">
                            {content}
                        </p>
                    )}
                </div>

                <p className="text-[#64748B] text-sm mt-1">{subtext}</p>
            </div>
        </div>
    );
}
