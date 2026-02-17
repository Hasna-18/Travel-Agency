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
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            <FeatureCard
              icon={<Plane className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F3D5E]" />}
              title="Global Network"
              desc="Access to exclusive resorts and airlines worldwide."
            />
            <FeatureCard
              icon={<Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F3D5E]" />}
              title="Secure Booking"
              desc="Your data and payments are always protected."
            />
            <FeatureCard
              icon={<Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F3D5E]" />}
              title="24/7 Support"
              desc="Dedicated travel experts available at any time."
            />
            <FeatureCard
              icon={<Globe className="w-7 h-7 sm:w-8 sm:h-8 text-[#0F3D5E]" />}
              title="Eco Conscious"
              desc="Sustainable travel options for responsible explorers."
            />
          </div>
        </div>
      </section>

      <PackagesSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative bg-[#0F3D5E] rounded-3xl sm:rounded-[3rem] lg:rounded-[4rem] px-6 sm:px-8 py-16 sm:py-20 text-center overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
                Ready to start your next adventure?
              </h2>
              <p className="text-[#CAF0F8] text-base sm:text-lg mb-8 sm:mb-10">
                Join over 50,000 travelers who have already experienced the difference with Future Fly Global Ventures.
              </p>
              <button className="bg-white text-[#0F3D5E] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black hover:bg-[#CAF0F8] transition-all shadow-xl">
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
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 sm:mb-6 border border-[#CAF0F8]">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#0F3D5E] mb-2">{title}</h3>
      <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
