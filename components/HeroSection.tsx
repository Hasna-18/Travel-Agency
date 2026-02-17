// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Star, Calendar, MapPin, Search, Users } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function HeroSection() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const router = useRouter();

//     const handleSearch = () => {
//         if (searchQuery.trim()) {
//             router.push(`/packages?search=${encodeURIComponent(searchQuery)}`);
//         } else {
//             router.push('/packages');
//         }
//     };

//     return (
//         <section className="relative w-full min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-white">
//             {/* Soft Gradient Background Blobs */}
//             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
//             <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] -z-10 opacity-50" />

//             <div className="max-w-7xl mx-auto px-6 w-full">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//                     {/* Left Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                     >
//                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-8">
//                             <Star className="w-3.5 h-3.5 fill-orange-400" />
//                             <span>The Gold Standard in Travel</span>
//                         </div>

//                         <h1 className="text-6xl lg:text-7xl font-serif italic text-slate-900 leading-[1.05] mb-8">
//                             Escape to the <br />
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 not-italic font-sans font-black">
//                                 Extraordinary.
//                             </span>
//                         </h1>

//                         <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
//                             We curate bespoke journeys for the discerning traveler. Discover hidden villas, private islands, and cultures untouched by time.
//                         </p>

//                     </motion.div>

//                     {/* Right Image Composition */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1 }}
//                         className="relative"
//                     >
//                         <div className="relative h-[550px] w-full rounded-[2] overflow-hidden shadow-2xl z-10">
//                             <Image
//                                 src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1600"
//                                 alt="Luxury Travel"
//                                 fill
//                                 className="object-cover"
//                                 priority
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//                         </div>

//                         {/* Decorative frame element */}
//                         <div className="absolute -top-6 -right-6 w-full h-full border-2 border-slate-100 rounded-[2] -z-10" />
//                     </motion.div>
//                 </div>

//                 {/* --- SEARCH BAR COMPONENT --- */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="relative z-20 mt-[-60px] lg:mt-[-80px] max-w-5xl mx-auto"
//                 >
//                     <div className="bg-white p-4 lg:p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

//                         {/* Location */}
//                         <div className="flex items-center gap-4 px-4 py-2 border-r border-slate-100">
//                             <MapPin className="text-blue-500 w-6 h-6" />
//                             <div className="flex flex-col">
//                                 <span className="text-xs font-bold text-slate-400 uppercase">Location</span>
//                                 <input
//                                     type="text"
//                                     placeholder="Where to?"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                                     className="bg-transparent outline-none text-slate-800 font-medium placeholder:text-slate-300"
//                                 />
//                             </div>
//                         </div>

//                         {/* Date */}
//                         <div className="flex items-center gap-4 px-4 py-2 border-r border-slate-100">
//                             <Calendar className="text-blue-500 w-6 h-6" />
//                             <div className="flex flex-col">
//                                 <span className="text-xs font-bold text-slate-400 uppercase">Check In</span>
//                                 <input type="date" className="bg-transparent outline-none text-slate-800 font-medium text-sm" />
//                             </div>
//                         </div>

//                         {/* Guests */}
//                         <div className="flex items-center gap-4 px-4 py-2 border-r border-slate-100">
//                             <Users className="text-blue-500 w-6 h-6" />
//                             <div className="flex flex-col">
//                                 <span className="text-xs font-bold text-slate-400 uppercase">Travelers</span>
//                                 <select className="bg-transparent outline-none text-slate-800 font-medium appearance-none">
//                                     <option>2 Adults, 1 Cabin</option>
//                                     <option>1 Adult</option>
//                                     <option>Family (4+)</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Search Button */}
//                         <div className="px-2">
//                             <button
//                                 onClick={handleSearch}
//                                 className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-blue-200"
//                             >
//                                 <Search className="w-5 h-5" />
//                                 Find Destinations
//                             </button>
//                         </div>

//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, MapPin, Search, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/packages?search=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push('/packages');
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-white">

            {/* Background Blobs with Ocean Theme */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#CAF0F8] rounded-full blur-[120px] -z-10 opacity-60" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#00B4D8]/20 rounded-full blur-[100px] -z-10 opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CAF0F8] border border-[#00B4D8]/30 text-[#0077B6] text-xs font-bold uppercase tracking-wider mb-6 sm:mb-8">
                            <Star className="w-3.5 h-3.5 fill-[#00B4D8]" />
                            <span>Trusted Travel Experts</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif italic text-[#0F3D5E] leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
                            Travel Smarter. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8] not-italic font-sans font-black">
                                Travel Better.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8 sm:mb-10 max-w-lg">
                            Future Fly Global Ventures delivers customized domestic and international travel solutions — from holiday packages and visa support to flight bookings and complete travel management.
                        </p>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[550px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600"
                                alt="Future Fly Travel"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D5E]/40 via-transparent to-transparent" />
                        </div>

                        <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-full h-full border-2 border-[#CAF0F8] rounded-2xl sm:rounded-3xl -z-10" />
                    </motion.div>
                </div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative z-20 mt-8 sm:mt-[-60px] lg:mt-[-80px] max-w-5xl mx-auto px-4 sm:px-0"
                >
                    <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,119,182,0.12)] border border-[#CAF0F8] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">

                        {/* Location */}
                        <div className="flex items-center gap-4 px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#CAF0F8]">
                            <MapPin className="text-[#0077B6] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                            <div className="flex flex-col flex-1">
                                <span className="text-xs font-bold text-[#64748B] uppercase">Destination</span>
                                <input
                                    type="text"
                                    placeholder="Where would you like to go?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    className="bg-transparent outline-none text-[#0F3D5E] font-medium placeholder:text-[#64748B]/50 w-full"
                                />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-4 px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#CAF0F8]">
                            <Calendar className="text-[#0077B6] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                            <div className="flex flex-col flex-1">
                                <span className="text-xs font-bold text-[#64748B] uppercase">Travel Date</span>
                                <input type="date" className="bg-transparent outline-none text-[#0F3D5E] font-medium text-sm w-full" />
                            </div>
                        </div>

                        {/* Travelers */}
                        <div className="flex items-center gap-4 px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#CAF0F8]">
                            <Users className="text-[#0077B6] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                            <div className="flex flex-col flex-1">
                                <span className="text-xs font-bold text-[#64748B] uppercase">Travelers</span>
                                <select className="bg-transparent outline-none text-[#0F3D5E] font-medium appearance-none w-full">
                                    <option>1 Adult</option>
                                    <option>2 Adults</option>
                                    <option>Family (4+)</option>
                                    <option>Group Tour</option>
                                </select>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="px-2">
                            <button
                                onClick={handleSearch}
                                className="w-full bg-[#0077B6] hover:bg-[#0F3D5E] text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg"
                                style={{ boxShadow: '0 10px 30px rgba(0, 119, 182, 0.25)' }}
                            >
                                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="text-sm sm:text-base">Explore Packages</span>
                            </button>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
