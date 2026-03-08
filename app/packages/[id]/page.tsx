// "use client";

// import { use, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Star, Calendar, CheckCircle2, ArrowLeft, Share2, Heart, Plane, ShieldCheck, CreditCard } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { packages, Package } from "@/data/packages";

// export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
//     const { id } = use(params);
//     const router = useRouter();
//     const pkg = packages.find((p) => p.id === id);

//     if (!pkg) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-white">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold mb-4">Package not found</h2>
//                     <Link href="/packages" className="text-blue-600 font-bold">Back to all packages</Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <main className="bg-white pt-24">
//             {/* Hero Header */}
//             <div className="relative h-[60vh] min-h-[400px] w-full">
//                 <Image
//                     src={pkg.image}
//                     alt={pkg.title}
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//                 <div className="absolute inset-0 flex items-end">
//                     <div className="max-w-7xl mx-auto px-6 w-full pb-16">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="text-white"
//                         >
//                             <div className="flex gap-4 mb-6">
//                                 <button
//                                     onClick={() => router.back()}
//                                     className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all"
//                                 >
//                                     <ArrowLeft className="w-5 h-5" />
//                                 </button>
//                                 <span className="bg-blue-500 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
//                                     {pkg.tag}
//                                 </span>
//                             </div>
//                             <h1 className="text-5xl md:text-7xl font-black mb-4">{pkg.title}</h1>
//                             <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
//                                 <div className="flex items-center gap-2">
//                                     <MapPin className="w-5 h-5 text-blue-400" />
//                                     <span>{pkg.location}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
//                                     <span>{pkg.rating} Rating</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Calendar className="w-5 h-5 text-blue-400" />
//                                     <span>{pkg.duration}</span>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-6 py-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//                     {/* Left Column: Details */}
//                     <div className="lg:col-span-2">
//                         <section className="mb-16">
//                             <h2 className="text-3xl font-bold mb-6">Overview</h2>
//                             <p className="text-lg text-slate-500 leading-relaxed mb-8">
//                                 {pkg.description}
//                             </p>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                 <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
//                                     <h3 className="font-bold text-slate-900 mb-4">Highlights</h3>
//                                     <ul className="space-y-4">
//                                         {pkg.highlights.map((h, i) => (
//                                             <li key={i} className="flex items-start gap-3">
//                                                 <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
//                                                 <span className="text-slate-600">{h}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
//                                     <h3 className="font-bold text-slate-900 mb-4">What's Included</h3>
//                                     <ul className="space-y-4">
//                                         {pkg.included.map((item, i) => (
//                                             <li key={i} className="flex items-start gap-3">
//                                                 <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
//                                                 <span className="text-slate-600">{item}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </section>

//                         <section className="mb-16">
//                             <h2 className="text-3xl font-bold mb-8">Itinerary</h2>
//                             <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
//                                 {pkg.itinerary.map((step, i) => (
//                                     <div key={i} className="relative pl-12">
//                                         <div className="absolute left-0 top-0 w-8 h-8 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center font-bold text-blue-600 z-10">
//                                             {step.day}
//                                         </div>
//                                         <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
//                                         <p className="text-slate-500">{step.description}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                     </div>

//                     {/* Right Column: Booking Card */}
//                     <div className="lg:col-span-1">
//                         <div className="sticky top-32 bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/50">
//                             <div className="flex justify-between items-start mb-8">
//                                 <div>
//                                     <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Price starts at</p>
//                                     <p className="text-4xl font-black text-slate-900">{pkg.price}</p>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
//                                         <Heart className="w-5 h-5 text-slate-400" />
//                                     </button>
//                                     <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
//                                         <Share2 className="w-5 h-5 text-slate-400" />
//                                     </button>
//                                 </div>
//                             </div>

//                             <div className="space-y-4 mb-8">
//                                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
//                                     <Plane className="w-6 h-6 text-blue-600" />
//                                     <div className="text-sm">
//                                         <p className="font-bold">Next Departure</p>
//                                         <p className="text-slate-400">Available from May 15, 2024</p>
//                                     </div>
//                                 </div>
//                                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
//                                     <ShieldCheck className="w-6 h-6 text-blue-600" />
//                                     <div className="text-sm">
//                                         <p className="font-bold">Safe Journey</p>
//                                         <p className="text-slate-400">Full insurance & guided support</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <button className="w-full btn-primary py-5 text-lg font-bold mb-4">
//                                 Book This Experience
//                             </button>
//                             <button className="w-full bg-white border-2 border-slate-900 text-slate-900 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
//                                 <CreditCard className="w-5 h-5" />
//                                 Customize Itinerary
//                             </button>

//                             <p className="text-center text-slate-400 text-xs mt-6">
//                                 * Cancellation is free up to 72 hours before departure.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }

"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Calendar, CheckCircle2, ArrowLeft, Share2, Heart, Plane, ShieldCheck, CreditCard, MessageCircle, Link2, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { packages, Package } from "@/data/packages";

export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [name, setName] = useState("");
    const [copied, setCopied] = useState(false);

    const pkg = packages.find((p) => p.id === id);

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Package not found</h2>
                    <Link href="/packages" className="text-blue-600 font-bold">Back to all packages</Link>
                </div>
            </div>
        );
    }

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: pkg.title,
            text: `Check out this travel package: ${pkg.title} — ${pkg.location} (${pkg.duration}) starting at ${pkg.price}!`,
            url,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // user cancelled share, do nothing
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch {
                // fallback: do nothing
            }
        }
    };

    const handleBookNow = () => {
        const greeting = name.trim() ? `Hi, I'm ${name.trim()}. ` : "Hi, ";
        const message = `${greeting}I'd like to enquire about the *${pkg.title}* package (${pkg.location}, ${pkg.duration}). Please share more details.`;
        const encoded = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send/?phone=919746170832&text=${encoded}`, "_blank");
    };

    return (
        <main className="bg-white pt-24">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-slate-900 overflow-hidden">
                {/* Blurred Background */}
                <div className="absolute inset-0 opacity-50">
                    <Image
                        src={pkg.image}
                        alt={`${pkg.title} background`}
                        fill
                        className="object-cover blur-3xl scale-110"
                        priority
                    />
                </div>

                {/* Main Foreground Image (Fully Visible) */}
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-6 w-full pb-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <button
                                    onClick={() => router.back()}
                                    className="bg-white/20 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/40 transition-all border border-white/10 shadow-lg"
                                >
                                    <ArrowLeft className="w-5 h-5 text-white" />
                                </button>
                                <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-white/20 shadow-lg text-white">
                                    {pkg.tag}
                                </span>
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-5xl md:text-7xl font-black mb-4"
                            >
                                {pkg.title}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap items-center gap-6 text-sm font-medium"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span>{pkg.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                                    <span>{pkg.rating} Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-blue-400" />
                                    <span>{pkg.duration}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                {pkg.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-linear-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl border border-blue-100/60 shadow-[inset_0_4px_20px_rgba(255,255,255,0.8)] relative overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 blur-xl group-hover:opacity-10 transition-opacity">
                                        <Star className="w-40 h-40 text-blue-600" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="p-3 bg-white rounded-2xl shadow-lg shadow-blue-200/50 border border-blue-50">
                                            <Star className="w-6 h-6 text-blue-600 fill-blue-600/20" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">Highlights</h3>
                                    </div>
                                    <ul className="space-y-3 relative z-10">
                                        {pkg.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/80 transition-colors border border-transparent hover:border-white hover:shadow-sm group/item">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                                                <span className="text-slate-700 font-medium leading-relaxed">{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 bg-linear-to-br from-emerald-50/50 to-teal-50/50 rounded-3xl border border-emerald-100/60 shadow-[inset_0_4px_20px_rgba(255,255,255,0.8)] relative overflow-hidden group hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 blur-xl group-hover:opacity-10 transition-opacity">
                                        <ShieldCheck className="w-40 h-40 text-emerald-600" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="p-3 bg-white rounded-2xl shadow-lg shadow-emerald-200/50 border border-emerald-50">
                                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                                    </div>
                                    <ul className="space-y-3 relative z-10">
                                        {pkg.included.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/80 transition-colors border border-transparent hover:border-white hover:shadow-sm group/item">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                                                <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-8">Itinerary</h2>
                            <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                                {pkg.itinerary.map((step, i) => (
                                    <div key={i} className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-8 h-8 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center font-bold text-blue-600 z-10">
                                            {step.day}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {pkg.gallery && pkg.gallery.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-16"
                            >
                                <h2 className="text-3xl font-bold mb-8">Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {pkg.gallery.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            className="relative h-48 rounded-2xl overflow-hidden shadow-sm"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${pkg.title} gallery image ${i + 1}`}
                                                fill
                                                className="object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Right Column: Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/50">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-4xl font-black text-slate-900">{pkg.price}</p>
                                </div>
                                <div className="flex gap-2">
                                    {/* <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                        <Heart className="w-5 h-5 text-slate-400" />
                                    </button> */}
                                    <button
                                        onClick={handleShare}
                                        title={copied ? "Link copied!" : "Share this package"}
                                        className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors relative"
                                    >
                                        {copied
                                            ? <Check className="w-5 h-5 text-green-500" />
                                            : <Share2 className="w-5 h-5 text-slate-400" />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* <div className="space-y-4 mb-8">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <Plane className="w-6 h-6 text-blue-600" />
                                    <div className="text-sm">
                                        <p className="font-bold">Travel safe with Us</p>
                                        <p className="text-slate-400"></p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                    <div className="text-sm">
                                        <p className="font-bold">Safe Journey</p>
                                        <p className="text-slate-400">Full insurance & guided support</p>
                                    </div>
                                </div>
                            </div> */}

                            {/* Optional Name Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-slate-600 mb-2">
                                    Your Name <span className="text-slate-400 font-normal">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                                />
                            </div>

                            {/* WhatsApp Book Button */}
                            <button
                                onClick={handleBookNow}
                                className="w-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white py-5 rounded-full text-lg font-bold mb-4 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-200"
                            >
                                Book Your Trip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}