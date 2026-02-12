"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Calendar, CheckCircle2, ArrowLeft, Share2, Heart, Plane, ShieldCheck, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { packages, Package } from "@/data/packages";

export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
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

    return (
        <main className="bg-white pt-24">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-6 w-full pb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white"
                        >
                            <div className="flex gap-4 mb-6">
                                <button
                                    onClick={() => router.back()}
                                    className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <span className="bg-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {pkg.tag}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-4">{pkg.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
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
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                {pkg.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">Highlights</h3>
                                    <ul className="space-y-4">
                                        {pkg.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                                                <span className="text-slate-600">{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">What's Included</h3>
                                    <ul className="space-y-4">
                                        {pkg.included.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                                                <span className="text-slate-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-16">
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
                        </section>
                    </div>

                    {/* Right Column: Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/50">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Price starts at</p>
                                    <p className="text-4xl font-black text-slate-900">{pkg.price}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                        <Heart className="w-5 h-5 text-slate-400" />
                                    </button>
                                    <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                        <Share2 className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <Plane className="w-6 h-6 text-blue-600" />
                                    <div className="text-sm">
                                        <p className="font-bold">Next Departure</p>
                                        <p className="text-slate-400">Available from May 15, 2024</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                    <div className="text-sm">
                                        <p className="font-bold">Safe Journey</p>
                                        <p className="text-slate-400">Full insurance & guided support</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full btn-primary py-5 text-lg font-bold mb-4">
                                Book This Experience
                            </button>
                            <button className="w-full bg-white border-2 border-slate-900 text-slate-900 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                Customize Itinerary
                            </button>

                            <p className="text-center text-slate-400 text-xs mt-6">
                                * Cancellation is free up to 72 hours before departure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
