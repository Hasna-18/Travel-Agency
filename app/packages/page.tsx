"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Calendar, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";

function PackagesList() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";
    const [filterQuery, setFilterQuery] = useState(search);
    const [filteredPackages, setFilteredPackages] = useState(packages);

    useEffect(() => {
        const results = packages.filter(pkg =>
            pkg.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
            pkg.location.toLowerCase().includes(filterQuery.toLowerCase()) ||
            pkg.tag.toLowerCase().includes(filterQuery.toLowerCase())
        );
        setFilteredPackages(results);
    }, [filterQuery]);

    return (
        <main className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-[#F1F5F9] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-10 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0F3D5E] mb-5 sm:mb-6">
                        All <span className="text-[#0077B6]">Packages</span>
                    </h1>
                    <p className="text-[#64748B] text-base sm:text-lg max-w-2xl">
                        Explore our full collection of hand-picked luxury experiences across the globe.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 sm:mb-12">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by destination or package name..."
                            value={filterQuery}
                            onChange={(e) => setFilterQuery(e.target.value)}
                            className="w-full bg-white border border-[#CAF0F8] rounded-xl sm:rounded-2xl pl-12 pr-6 py-3 sm:py-4 text-[#0F3D5E] focus:outline-none focus:ring-2 focus:ring-[#0077B6]/20 transition-all"
                        />
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-white border border-[#CAF0F8] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-[#0F3D5E] hover:bg-[#CAF0F8] transition-all">
                        <Filter className="w-5 h-5" />
                        More Filters
                    </button>
                </div>

                {/* Results */}
                {filteredPackages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {filteredPackages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Link href={`/packages/${pkg.id}`} className="card-luxury block group bg-white">
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
                ) : (
                    <div className="text-center py-16 sm:py-20 bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] border border-[#CAF0F8] shadow-sm">
                        <div className="max-w-md mx-auto px-6">
                            <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#CAF0F8] mx-auto mb-5 sm:mb-6" />
                            <h3 className="text-xl sm:text-2xl font-bold text-[#0F3D5E] mb-2">No packages found</h3>
                            <p className="text-[#64748B]">We couldn't find any packages matching your search. Try adjusting your keywords.</p>
                            <button
                                onClick={() => setFilterQuery("")}
                                className="mt-6 sm:mt-8 text-[#0077B6] font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function AllPackagesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PackagesList />
        </Suspense>
    );
}
