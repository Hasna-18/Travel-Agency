"use client";

import { motion } from "framer-motion";
import { Plane, ShieldCheck, Map, Clock, Globe, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const coreServices = [
        {
            icon: <Map className="w-6 h-6 text-[#0077B6]" />,
            title: "Travel Planning & Consultation",
            desc: "Personalized trip planning with expert destination guidance"
        },
        {
            icon: <Globe className="w-6 h-6 text-[#0077B6]" />,
            title: "Tour Packages",
            desc: "Domestic & international packages tailored to your needs"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-[#0077B6]" />,
            title: "Affordable Price Setting",
            desc: "Best-value travel options with transparent pricing"
        },
        {
            icon: <Plane className="w-6 h-6 text-[#0077B6]" />,
            title: "Transport & Local Services",
            desc: "Airport transfers, cab booking, and local travel support"
        },
        {
            icon: <Clock className="w-6 h-6 text-[#0077B6]" />,
            title: "Ticket Booking",
            desc: "Air and railway reservations made simple"
        },
        {
            icon: <Heart className="w-6 h-6 text-[#0077B6]" />,
            title: "Visa & Documentation Support",
            desc: "Complete visa guidance and travel document assistance"
        }
    ];

    return (
        <main className="bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header Section */}
                <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#0077B6] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                            Our Story
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif italic text-[#0F3D5E] mb-6 sm:mb-8 leading-tight">
                            Turning Travel Dreams into <span className="text-[#0077B6] not-italic font-sans font-black">Reality.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed">
                            Future Fly Global Ventures is a dynamic travel and tourism company based in Kerala, India, committed to creating extraordinary, worry-free experiences worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Brand Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 sm:mb-28 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[400px] sm:h-[500px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600"
                                alt="Travel Excellence"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-48 h-48 sm:w-64 sm:h-64 bg-[#CAF0F8] rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3D5E]">The Future Fly Advantage</h2>
                        <div className="space-y-4 sm:space-y-6 text-[#64748B] leading-relaxed">
                            <p>
                                Backed by solid industry experience, we deliver end-to-end travel solutions designed around your unique needs. [cite: 3] Every itinerary is thoughtfully tailored to match your preferences, style, and budget. [cite: 5]
                            </p>
                            <p>
                                Our customer-first approach, transparent pricing, and expert guidance ensure you have total confidence from the moment you start planning until you safely return home.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
                            <div className="p-5 sm:p-6 bg-[#F1F5F9] rounded-2xl sm:rounded-3xl border border-[#CAF0F8]">
                                <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-2">Service Focus</p>
                                <p className="text-[#0F3D5E] font-bold">Domestic & International [cite: 4]</p>
                            </div>
                            <div className="p-5 sm:p-6 bg-[#F1F5F9] rounded-2xl sm:rounded-3xl border border-[#CAF0F8]">
                                <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-2">Pricing</p>
                                <p className="text-[#0F3D5E] font-bold">Transparent & Best-Value [cite: 14, 15]</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mb-20 sm:mb-28 lg:mb-32">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3D5E] mb-3 sm:mb-4">Our Core Services</h2>
                        <p className="text-[#64748B]">Delivering journeys powered by professionalism, care, and excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {coreServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-8 sm:p-10 rounded-2xl sm:rounded-[2rem] bg-white border border-[#CAF0F8] shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#CAF0F8] rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#0F3D5E] mb-2 sm:mb-3">{service.title}</h3>
                                <p className="text-[#64748B] text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional Services List */}
                <div className="bg-[#0F3D5E] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 lg:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 sm:p-20 opacity-10">
                        <Plane className="w-48 h-48 sm:w-64 sm:h-64 rotate-12" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">Comprehensive Support</h2>
                            <p className="text-[#CAF0F8] mb-6 sm:mb-8 max-w-md">
                                From planning to documentation, we manage every detail with precision so you can travel with complete confidence
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    "Flight & Hotel Reservations [cite: 4]",
                                    "Airport Transfers [cite: 17]",
                                    "Railway Reservations [cite: 19]",
                                    "Local Travel Support [cite: 17]",
                                    "Corporate Trip Planning [cite: 7]",
                                    "Honeymoon Escapes [cite: 7]"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#CAF0F8]">
                                        <div className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                            <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Get in Touch </h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div>
                                    <p className="text-xs text-[#CAF0F8] uppercase font-bold">Location</p>
                                    <p className="text-base sm:text-lg">Shop No.06, Attipra Zonal Office Building, Kulathoor, Trivandrum </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                    <div>
                                        <p className="text-xs text-[#CAF0F8] uppercase font-bold">Call Us</p>
                                        <p className="text-base sm:text-lg font-bold tracking-tight">+91 8606904047 </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#CAF0F8] uppercase font-bold">Email</p>
                                        <p className="text-base sm:text-lg">futureflytravels369@gmail.com </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}