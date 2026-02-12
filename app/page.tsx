"use client";

import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import { motion } from "framer-motion";
import { Plane, Shield, Headphones, Globe } from "lucide-react";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <FeatureCard
              icon={<Plane className="w-8 h-8 text-slate-900" />}
              title="Global Network"
              desc="Access to exclusive resorts and airlines worldwide."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-slate-900" />}
              title="Secure Booking"
              desc="Your data and payments are always protected."
            />
            <FeatureCard
              icon={<Headphones className="w-8 h-8 text-slate-900" />}
              title="24/7 Support"
              desc="Dedicated travel experts available at any time."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-slate-900" />}
              title="Eco Conscious"
              desc="Sustainable travel options for responsible explorers."
            />
          </div>
        </div>
      </section>

      <PackagesSection />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-slate-900 rounded-[4rem] px-8 py-20 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                Ready to start your next adventure?
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Join over 50,000 travelers who have already experienced the difference with LuxeTravel.
              </p>
              <button className="bg-white text-slate-900 px-10 py-5 rounded-full font-black hover:bg-slate-100 transition-all">
                Book a Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
