import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Future Fly Global Ventures",
  description:
    "Future Fly Global Ventures delivers customized domestic and international travel solutions — from holiday packages and visa support to flight bookings and complete travel management.",
  icons: {
    icon: "/logo.png", // put your logo in public/logo.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}