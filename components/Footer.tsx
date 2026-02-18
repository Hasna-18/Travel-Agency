import Link from "next/link";
import { Plane, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#F1F5F9] border-t border-[#CAF0F8] pt-12 sm:pt-16 pb-6 sm:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">

                    {/* Brand Section */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
                            <Plane className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F3D5E]" />
                            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F3D5E]">
                                Future Fly
                            </span>
                        </Link>
                        <p className="text-[#64748B] text-sm leading-relaxed mb-4 sm:mb-6">
                            Customized domestic and international travel solutions from Kerala — delivered with professionalism, transparency, and care.
                        </p>

                        <div className="flex gap-4">
                            <Instagram className="w-5 h-5 text-[#64748B] cursor-pointer hover:text-[#0077B6] transition-colors" />
                            <Facebook className="w-5 h-5 text-[#64748B] cursor-pointer hover:text-[#0077B6] transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 sm:mb-6 text-[#0F3D5E] uppercase text-xs tracking-widest">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <Link href="/about" className="text-[#64748B] hover:text-[#0077B6] text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/packages" className="text-[#64748B] hover:text-[#0077B6] text-sm transition-colors">
                                    Tour Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#64748B] hover:text-[#0077B6] text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-4 sm:mb-6 text-[#0F3D5E] uppercase text-xs tracking-widest">
                            Contact
                        </h4>
                        <div className="space-y-2 sm:space-y-3 text-sm text-[#64748B]">

                            <div className="flex flex-col gap-1">
                                <a
                                    href="tel:+919746170832"
                                    className="whitespace-nowrap hover:text-[#0077B6] transition-colors"
                                >
                                    +91 9746170832
                                </a>

                                <a
                                    href="tel:+918606904047"
                                    className="whitespace-nowrap hover:text-[#0077B6] transition-colors"
                                >
                                    +91 8606904047
                                </a>
                            </div>

                            <a
                                href="mailto:futureflyglobalventures@gmail.com"
                                className="hover:text-[#0077B6] transition-colors block"
                            >
                                ✉️ futureflyglobalventures@gmail.com
                            </a>

                            <p>
                                Shop No.06, Attipra Zonal Office Building,<br />
                                Kulathoor, Trivandrum, Kerala
                            </p>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[#CAF0F8] pt-6 text-center">
                    <p className="text-[#64748B] text-xs">
                        © {new Date().getFullYear()} Future Fly Global Ventures. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
