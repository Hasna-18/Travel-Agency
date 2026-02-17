"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";

export default function PackagesSection() {
    // Show only first 6 packages on the home page
    const displayPackages = packages.slice(0, 6);

    return (
        <section id="packages" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3D5E] mb-4 sm:mb-6">
                            Popular <span className="text-[#64748B]">Packages</span>
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Carefully curated travel experiences designed for comfort and unforgettable memories.
                        </p>
                    </div>
                    <Link href="/packages" className="flex items-center gap-2 font-bold text-[#0F3D5E] hover:text-[#0077B6] hover:gap-3 transition-all">
                        View All Packages <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {displayPackages.map((pkg, idx) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={`/packages/${pkg.id}`} className="card-luxury block group">
                                <div className="relative h-56 sm:h-64 w-full">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0F3D5E] uppercase tracking-wider">
                                        {pkg.tag}
                                    </div>
                                </div>
                                <div className="p-5 sm:p-6">
                                    <div className="flex items-center gap-1 text-[#64748B] text-sm mb-3">
                                        <MapPin className="w-4 h-4" />
                                        <span>{pkg.location}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#0F3D5E] mb-4 group-hover:text-[#0077B6] transition-colors">
                                        {pkg.title}
                                    </h3>
                                    <div className="flex items-center justify-between pt-4 border-t border-[#CAF0F8]">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                                            <span className="font-bold text-[#0F3D5E]">{pkg.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#64748B] text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="text-base sm:text-lg font-black text-[#0F3D5E]">
                                            {pkg.price}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
