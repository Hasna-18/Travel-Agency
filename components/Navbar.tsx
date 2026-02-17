"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        className="w-28 sm:w-32 h-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-10">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-[#0077B6] ${pathname === link.href ? "text-[#0F3D5E] font-bold" : "text-[#64748B]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="text-sm font-medium text-[#64748B] hover:text-[#0077B6] transition-colors">
                        Login
                    </button>
                    <button className="btn-primary text-sm px-6 py-2.5">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden z-50 p-2 text-[#0F3D5E] hover:bg-[#CAF0F8] rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden absolute top-20 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-[#CAF0F8] shadow-xl"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-lg font-medium transition-colors py-2 ${pathname === link.href ? "text-[#0077B6] font-bold" : "text-[#64748B] hover:text-[#0077B6]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-3 border-t border-[#CAF0F8]">
                                <button className="w-full text-center py-3 text-[#64748B] hover:text-[#0077B6] font-medium transition-colors">
                                    Login
                                </button>
                                <button className="btn-primary w-full py-3">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
