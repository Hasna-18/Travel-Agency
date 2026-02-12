// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function AboutPage() {
//     return (
//         <main className="pt-32 pb-24">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Header */}
//                 <div className="max-w-3xl mb-20">
//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-5xl md:text-7xl font-black text-slate-900 mb-8"
//                     >
//                         Redefining the <span className="text-slate-400">Art of Travel.</span>
//                     </motion.h1>
//                     <p className="text-xl text-slate-500 leading-relaxed">
//                         Founded in 2010, LuxeTravel was born out of a passion for discovery and a commitment to providing travelers with more than just a trip—but a legacy of memories.
//                     </p>
//                 </div>

//                 {/* Brand Story */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
//                     <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
//                         <img
//                             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
//                             alt="Our Team"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                     <div>
//                         <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Mission</h2>
//                         <div className="space-y-6 text-slate-600 leading-relaxed">
//                             <p>
//                                 We believe that travel is the ultimate form of education. It challenges our perspectives, connects us with diverse cultures, and reminds us of the shared humanity that binds us all.
//                             </p>
//                             <p>
//                                 Our mission is to bridge the gap between imagination and reality by creating hyper-personalized itineraries that reflect the unique desires of our clients. Whether it's a private villa in Tuscany or a nomadic expedition in the Sahara, we handle every detail with precision.
//                             </p>
//                             <div className="grid grid-cols-2 gap-8 pt-6">
//                                 <div>
//                                     <h4 className="text-4xl font-black text-slate-900 mb-2">14+</h4>
//                                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Years of Experience</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-4xl font-black text-slate-900 mb-2">150+</h4>
//                                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Destinations</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Values */}
//                 <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
//                     <div className="text-center max-w-2xl mx-auto mb-16">
//                         <h2 className="text-3xl font-bold text-slate-900 mb-4">Values that Drive Us</h2>
//                         <p className="text-slate-500">The core principles that guide every journey we curate.</p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//                         <div>
//                             <h3 className="text-xl font-bold mb-4">Integrity</h3>
//                             <p className="text-slate-500 text-sm leading-relaxed">Honest pricing and transparent communication at every step of your journey.</p>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-bold mb-4">Excellence</h3>
//                             <p className="text-slate-500 text-sm leading-relaxed">We settle for nothing less than perfection in service, accommodation, and experience.</p>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-bold mb-4">Passion</h3>
//                             <p className="text-slate-500 text-sm leading-relaxed">Our team consists of lifelong travelers who are truly passionate about what they do.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }



"use client";

import { motion } from "framer-motion";
import { Plane, ShieldCheck, Map, Clock, Globe, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const coreServices = [
        {
            icon: <Map className="w-6 h-6 text-blue-600" />,
            title: "Expert Planning",
            desc: "Personalized trip planning with expert destination guidance for every traveler. [cite: 10, 11]"
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: "Global Reach",
            desc: "Domestic and international tour packages tailored specifically to your unique needs. [cite: 12, 13]"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
            title: "Visa Support",
            desc: "Complete guidance and assistance with travel documents and visa processing. "
        }
    ];

    return (
        <main className="bg-white pt-32 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 mb-8 leading-tight">
                            Turning Travel Dreams into <span className="text-blue-600 not-italic font-sans font-black">Reality.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            Future Fly Global Ventures is a dynamic travel and tourism company based in Kerala, India, committed to creating extraordinary, worry-free experiences worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Brand Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600"
                                alt="Travel Excellence"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900">The Future Fly Advantage</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>
                                Backed by solid industry experience, we deliver end-to-end travel solutions designed around your unique needs. [cite: 3] Every itinerary is thoughtfully tailored to match your preferences, style, and budget. [cite: 5]
                            </p>
                            <p>
                                Our customer-first approach, transparent pricing, and expert guidance ensure you have total confidence from the moment you start planning until you safely return home.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Service Focus</p>
                                <p className="text-slate-900 font-bold">Domestic & International [cite: 4]</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Pricing</p>
                                <p className="text-slate-900 font-bold">Transparent & Best-Value [cite: 14, 15]</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Services [cite: 9]</h2>
                        <p className="text-slate-500">Delivering journeys powered by professionalism, care, and excellence. [cite: 7]</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional Services List */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-10">
                        <Plane className="w-64 h-64 rotate-12" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Comprehensive Support</h2>
                            <p className="text-slate-300 mb-8 max-w-md">
                                Beyond planning, we handle the technical details so you can focus on the memories.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Flight & Hotel Reservations [cite: 4]",
                                    "Airport Transfers [cite: 17]",
                                    "Railway Reservations [cite: 19]",
                                    "Local Travel Support [cite: 17]",
                                    "Corporate Trip Planning [cite: 7]",
                                    "Honeymoon Escapes [cite: 7]"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <h3 className="text-xl font-bold mb-6">Get in Touch [cite: 22]</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold">Location</p>
                                    <p className="text-lg">Shop No.06, Attipra Zonal Office Building, Kulathoor, Trivandrum [cite: 25]</p>
                                </div>
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold">Call Us</p>
                                        <p className="text-lg font-bold tracking-tight">(+91) 8606904047 [cite: 23]</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold">Email</p>
                                        <p className="text-lg">futureflytravels369@gmail.com [cite: 24]</p>
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