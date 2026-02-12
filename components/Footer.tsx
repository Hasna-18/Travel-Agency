import Link from "next/link";
import { Plane, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Plane className="w-8 h-8 text-slate-900" />
                            <span className="text-2xl font-bold tracking-tight text-slate-900">
                                LuxeTravel
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Creating unforgettable journeys with a focus on luxury, comfort, and authentic experiences since 2010.
                        </p>
                        <div className="flex gap-4">
                            <Instagram className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
                            <Twitter className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
                            <Facebook className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-900 transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">About Us</Link></li>
                            <li><Link href="/" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Careers</Link></li>
                            <li><Link href="/" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Blogs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/contact" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Contact Us</Link></li>
                            <li><Link href="/" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">FAQ</Link></li>
                            <li><Link href="/" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Newsletter</h4>
                        <p className="text-slate-500 text-sm mb-4">Subscribe for travel inspiration and exclusive offers.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
                            />
                            <button className="bg-slate-900 text-white rounded-full p-2.5">
                                <Plane className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">
                        © 2024 LuxeTravel. All rights reserved. Built for excellence.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-900 transition-colors">Terms of Service</span>
                        <span className="text-slate-400 text-xs cursor-pointer hover:text-slate-900 transition-colors">Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
