import Image from "next/image";

export default function HeroWithNavbar() {
    return (
        <div className="w-full bg-white py-10">
            {/* NAVBAR */}
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 mb-10">
                <div className="text-xl font-bold text-blue-600">travello</div>

                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">About</li>
                    <li className="cursor-pointer hover:text-blue-600">Services</li>
                    <li className="cursor-pointer hover:text-blue-600">Gallery</li>
                </ul>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm">
                    Start Booking
                </button>
            </nav>

            {/* HERO IMAGE */}
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="relative -rotate-2 shadow-2xl overflow-hidden">
                    <div
                        className="overflow-hidden"
                        style={{
                            clipPath:
                                "polygon(2% 0%, 98% 3%, 100% 85%, 95% 100%, 5% 97%, 0% 15%)",
                        }}
                    >
                        <Image
                            src="/hero.jpg"
                            alt="Adventure & Travel"
                            width={1600}
                            height={900}
                            priority
                            className="w-full h-[480px] object-cover"
                        />

                        {/* TEXT OVER IMAGE */}
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              text-white text-5xl md:text-7xl font-extrabold tracking-wide text-center drop-shadow-lg">
                            ADVENTURE <br /> & TRAVEL
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
