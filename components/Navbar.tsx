"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Plane className="w-8 h-8 text-slate-900" />
                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        Luxe<span className="text-slate-500">Travel</span>
                    </span>
                </Link>

                <ul className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-slate-900 ${pathname === link.href ? "text-slate-900" : "text-slate-500"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Login
                    </button>
                    <button className="btn-primary text-sm px-6 py-2.5">
                        Book Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
