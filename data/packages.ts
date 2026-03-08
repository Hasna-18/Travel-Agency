export interface Package {
    id: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    duration: string;
    image: string;
    gallery?: string[];
    tag: string;
    description: string;
    highlights: string[];
    itinerary: { day: number; title: string; description: string }[];
    included: string[];
}

export const packages: Package[] = [
    {
        id: "sri-lanka",
        title: "Sri Lanka Round Tour",
        location: "Sri Lanka, Asia",
        price: "Contact for Price",
        rating: 4.8,
        duration: "4 Days",
        image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
            "https://images.unsplash.com/photo-1663674588375-67b278fe0506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENvbG9tYm8lMjBDaXR5fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1619974643633-12acfdcedd16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnV3YXJhJTIwRWxpeWF8ZW58MHx8MHx8fDI%3D",
            "https://images.unsplash.com/photo-1678914903797-e775cf7a3571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1592905169881-eff95fe441ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FsbGUlMjBGb3J0fGVufDB8fDB8fHwy",
            "https://images.unsplash.com/photo-1607939594876-fd0f2e8fd033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2FsbGUlMjBEdXRjaCUyMEZvcnR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        tag: "Culture",
        description: "Explore the beauty of Sri Lanka on a perfectly designed 3 Nights / 4 Days round tour that blends culture, nature, and coastal charm. From the sacred heritage city of Kandy to the cool tea-covered hills of Nuwara Eliya, the scenic landscapes of Ella, and the historic coastline near Galle.",
        highlights: [
            "Pinnawala Elephant Orphanage",
            "Temple of the Sacred Tooth Relic",
            "Tea Plantation & Factory Tour",
            "Nine Arch Bridge",
            "Little Adam's Peak Hike",
            "Galle Fort Heritage Walk",
            "Madu River Boat Safari",
            "Turtle Hatchery Visit"
        ],
        itinerary: [
            { day: 1, title: "Kandy Arrival", description: "Airport pickup, visit Pinnawala Elephant Orphanage, Temple of the Sacred Tooth Relic, and enjoy a Traditional Cultural Dance Performance." },
            { day: 2, title: "Hill Country", description: "Explore Nuwara Eliya — visit Tea Plantation & Factory, relax at Gregory Lake, and enjoy Ramboda Falls." },
            { day: 3, title: "Ella & Galle", description: "Scenic photography at Nine Arch Bridge, short hike to Little Adam's Peak, visit Rawana Falls, and heritage walk inside Galle Fort." },
            { day: 4, title: "Colombo & Departure", description: "Madu River Boat Safari through mangroves, Turtle Hatchery Conservation Visit, Guided Colombo City Tour, and airport drop-off." }
        ],
        included: [
            "3 Nights Accommodation (3★ / 4★ Hotels – Double Sharing)",
            "Daily Breakfast & Dinner",
            "Private Air-Conditioned Toyota Car",
            "SLTDA Authorized English-Speaking Chauffeur",
            "Highway Tolls & Parking Fees",
            "Driver's Accommodation & Meals",
            "Passenger Insurance Coverage",
            "500ml Water Bottle per person per day",
            "Airport Pickup & Drop-off"
        ]
    },
    {
        id: "thailand",
        title: "Thailand Island & City Explorer",
        location: "Phuket, Krabi, Pattaya & Bangkok, Thailand",
        price: "Contact for Price",
        rating: 4.9,
        duration: "8 Days",
        image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
            "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1586432994534-2bbb0bb559c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBhdHRheWF8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1712335870501-b70177ef645f?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1587535361679-1b93aeb783dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3JhYmklMjBjaXR5fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGhpJTIwUGhpJTIwSXNsYW5kfGVufDB8fDB8fHww",
        ],
        tag: "Adventure",
        description: "Experience the best of Thailand in 8 exciting days across Phuket, Krabi, Pattaya, and Bangkok. Enjoy stunning island tours, crystal-clear beaches, cultural landmarks, thrilling speedboat rides, and vibrant city experiences — all with comfortable stays and smooth transfers for a hassle-free getaway.",
        highlights: [
            "Phi Phi Island & Maya Bay",
            "Four Islands Tour – Krabi",
            "Coral Island (Koh Larn) – Pattaya",
            "Bangkok Safari World & Marine Park",
            "Big Buddha Phuket",
            "Tiger Cave Temple",
            "Floating Market – Pattaya",
            "Tiger Park – Pattaya"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Phuket", description: "Airport pick-up and transfer to hotel. Evening Phuket City Tour including Big Buddha and scenic viewpoints." },
            { day: 2, title: "Phi Phi Island", description: "Speedboat tour to Phi Phi Islands — visit Maya Bay, Pileh Lagoon, and enjoy snorkeling in crystal-clear waters. Lunch included." },
            { day: 3, title: "Krabi", description: "Boat transfer to Krabi. Four Islands hopping — Phra Nang Cave Beach, Chicken Island, Poda Island. Lunch included." },
            { day: 4, title: "Krabi City Tour", description: "Visit Tiger Cave Temple and scenic viewpoints across Krabi city." },
            { day: 5, title: "Pattaya", description: "Transfer to Pattaya. Coral Island (Koh Larn) speedboat tour with lunch. Visit Floating Market and Tiger Park." },
            { day: 6, title: "Pattaya City Tour", description: "Explore Pattaya city sights and local experiences." },
            { day: 7, title: "Bangkok", description: "Transfer to Bangkok. Visit Safari World & Marine Park with a wildlife experience and lunch included." },
            { day: 8, title: "Departure", description: "Bangkok city exploration and airport drop-off." }
        ],
        included: [
            "7 Nights Accommodation (Phuket, Krabi, Pattaya & Bangkok)",
            "Daily Breakfast",
            "Lunch during Island Tours (Phi Phi, 4 Islands, Coral Island, Safari World)",
            "Airport Pick-up & Drop-off",
            "Phi Phi Island Tour with Lunch",
            "Four Islands Tour (Krabi) with Lunch",
            "Coral Island Tour (Koh Larn) with Lunch",
            "Safari World Bangkok & Marine Park with Lunch",
            "Phuket, Krabi & Pattaya City Tours",
            "All transfers between Phuket, Krabi, Pattaya & Bangkok",
            "Boat transfers (Phuket–Krabi & Island tours)"
        ]
    },
    {
        id: "lakshadweep",
        title: "Lakshadweep Island Escape",
        location: "Agatti Island, Lakshadweep",
        price: "Contact for Price",
        rating: 4.8,
        duration: "4 Days",
        image: "https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?w=1920&ar=16:9&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29yYWwlMjByZWVmcyUyMGxha3NoYWR3ZWVwfGVufDB8MHwwfHx8MA%3D%3D",
        gallery: [
            "https://images.unsplash.com/photo-1544558635-667480601430?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1683043430721-f4a25e539cd5?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1645453352382-4528c269cd5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1588472235276-7638965471e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2F5YWtpbmd8ZW58MHwwfDB8fHww",

        ],
        tag: "Relaxation",
        description: "Experience the untouched beauty of Lakshadweep on this 3 Nights / 4 Days island escape covering Agatti Island and nearby pristine islands. Enjoy crystal-clear lagoons, white sandy beaches, snorkeling, scuba diving, glass boat rides, and relaxing seaside moments — all with comfortable A/C stay and delicious meals included.",
        highlights: [
            "Snorkeling in Crystal Lagoons",
            "Scuba Diving",
            "Kayaking",
            "Glass Boat Rides",
            "White Sandy Beaches",
            "Agatti Island",
            "Pristine Coral Reefs",
            "Relaxing Seaside Moments"
        ],
        itinerary: [
            { day: 1, title: "Arrival at Agatti", description: "Arrive at Agatti Island. Check-in, welcome orientation, and relaxing evening at the beach." },
            { day: 2, title: "Water Adventures", description: "Snorkeling and glass boat ride over coral reefs. Explore the crystal-clear lagoons." },
            { day: 3, title: "Scuba & Kayaking", description: "Scuba diving session and kayaking through the serene island waters." },
            { day: 4, title: "Island Exploration & Departure", description: "Morning island walk, leisure time at the beach, and departure." }
        ],
        included: [
            "Entry Permit",
            "Transportation Tickets",
            "Heritage Fees",
            "Accommodation (Standard A/C Room)",
            "Breakfast, Lunch & Dinner",
            "All Entry Tickets",
            "Snorkeling",
            "Kayaking"
        ]
    },
    {
        id: "kerala",
        title: "Kerala Scenic Getaway",
        location: "Kerala, India",
        price: "Contact for Price",
        rating: 4.7,
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=100&w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1665077491542-dd7aa8be66ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFZhdHRhdmFkYXxlbnwwfHwwfHx8Mg%3D%3D",
            "https://images.unsplash.com/photo-1675174021331-ad15be36c30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhla2thZHl8ZW58MHx8MHx8fDI%3D",
            "https://images.unsplash.com/photo-1672219386269-486cbbe9a50f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE11bm5hcnxlbnwwfHwwfHx8Mg%3D%3D",
            "https://images.unsplash.com/photo-1577382539020-8305351c9433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFZhdHRhdmFkYXxlbnwwfHwwfHx8Mg%3D%3D"
        ],
        tag: "Nature",
        description: "Experience the beauty of Kerala with this perfectly crafted getaway featuring misty hills, serene backwaters, scenic beaches, and rich cultural charm. A relaxing and refreshing journey with comfortable stays and smooth sightseeing.",
        highlights: [
            "Vattavada Viewpoints & Strawberry Farm",
            "Echo Point & Kundala Lake – Munnar",
            "Mattupetty Dam",
            "Evening Campfire at Munnar",
            "Jeep Safari at Ramakalmedu",
            "Periyar Wildlife Sanctuary",
            "Houseboat Stay – Alappuzha",
            "Backwater Speed Boat Ride"
        ],
        itinerary: [
            { day: 1, title: "Vattavada", description: "Sightseeing at Vattavada — Viewpoints, Strawberry Farm & Waterfalls." },
            { day: 2, title: "Munnar", description: "Explore Echo Point, Kundala Lake & Mattupetty Dam. Evening Campfire at Munnar." },
            { day: 3, title: "Ramakalmedu & Thekkady", description: "Early Morning Jeep Safari & Off-road Adventure at Ramakalmedu. Visit Periyar Wildlife Sanctuary, Boating at Periyar Lake, and Spice Plantation Visit." },
            { day: 4, title: "Thekkady Experiences", description: "Optional Kathakali / Kalaripayattu Show and exploration of local markets in Thekkady." },
            { day: 5, title: "Alappuzha & Departure", description: "Houseboat Stay & Backwater Cruise in Alappuzha. Speed Boat Ride in Backwaters. Departure." }
        ],
        included: [
            "Stay",
            "Food",
            "Entry Passes",
            "Vehicle",
            "Campfire",
            "5 Activities"
        ]
    },
    {
        id: "kashmir",
        title: "Kashmir – Heaven on Earth",
        location: "Srinagar, Gulmarg, Pahalgam & Sonamarg, Kashmir",
        price: "Contact for Price",
        rating: 4.9,
        duration: "12 Days",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1616190419596-e2839e7380d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFtbXUlMjBrYXNobWlyfGVufDB8fDB8fHwy"
        ],
        tag: "Adventure",
        description: "Explore the stunning landscapes of Kashmir with this 12-day journey covering Srinagar, Gulmarg, Pahalgam, and Sonamarg. Enjoy Shikara rides, snow-capped mountains, beautiful valleys, and unforgettable Himalayan views — a complete 'Heaven on Earth' experience.",
        highlights: [
            "Srinagar – Dal Lake Shikara Ride",
            "Gulmarg – Gondola Cable Car",
            "Pahalgam Valley & Saffron Farm",
            "Sonamarg Valley",
            "Mughal Gardens – Nishat & Shalimar Bagh",
            "Iconic Chenab Bridge Route",
            "Jammu",
            "Local Market Shopping"
        ],
        itinerary: [
            { day: 1, title: "Departure from Kerala", description: "Kerala ↔ Kashmir Sleeper Class Train journey begins." },
            { day: 2, title: "Arrival in Jammu", description: "Arrive Jammu and board Vande Bharat Train to Srinagar." },
            { day: 3, title: "Srinagar", description: "Srinagar Airport / Railway Station pickup. Shikara Ride on Dal Lake. Visit Mughal Gardens — Nishat Bagh & Shalimar Bagh." },
            { day: 4, title: "Gulmarg", description: "Day excursion to Gulmarg. Gondola (Cable Car) Ride – Phase 1. Enjoy snow-capped Himalayan views." },
            { day: 5, title: "Pahalgam", description: "Valley sightseeing in Pahalgam — visit Saffron Farm & Apple Orchard." },
            { day: 6, title: "Sonamarg", description: "Excursion to Sonamarg Valley. Scenic landscapes and glacier views." },
            { day: 7, title: "Local Exploration", description: "Local market exploration & shopping in Srinagar." },
            { day: 8, title: "Return Journey", description: "Departure from Srinagar. Scenic train journey including the iconic Chenab Bridge route (subject to availability)." }
        ],
        included: [
            "Kerala ↔ Kashmir Up & Down Sleeper Class Train Tickets",
            "Jammu – Srinagar Vande Bharat Train Tickets",
            "5 Nights Accommodation",
            "4 Days Sightseeing Transportation",
            "Srinagar Airport / Railway Station Pickup & Drop",
            "Daily Breakfast & Dinner",
            "Dal Lake Shikara Ride",
            "Gondola (Cable Car) Tickets – Phase 1",
            "Mughal Garden Entry Tickets",
            "All Toll Charges, Permits & Parking Fees",
            "Malayali Tour Coordinator throughout the tour",
            "Travel Insurance"
        ]
    },
    {
        id: "strangers-camp",
        title: "Strangers Camp Kerala",
        location: "Kerala, India",
        price: "Contact for Price",
        rating: 4.7,
        duration: "3 Days",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gallery: [
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1525811902-f2342640856e?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=100&w=1200"
        ],
        tag: "Adventure",
        description: "Experience an exciting and refreshing Strangers Camp in the heart of Kerala — where new friendships, adventure, and unforgettable memories come together. Set amidst scenic hills, beaches, or backwaters, this camp brings together like-minded travelers for fun activities, group games, campfires, music nights, and outdoor exploration.",
        highlights: [
            "Vattavada Hills",
            "Wayanad",
            "Varkala Beach",
            "Amboori",
            "Thekkady",
            "Campfire & Music Nights",
            "Group Games & Activities",
            "Barbecue & Samudra Sadhya"
        ],
        itinerary: [
            { day: 1, title: "Arrival & Icebreakers", description: "Arrive at camp location. Icebreaker group activities, settling in, tea & snacks, and evening campfire." },
            { day: 2, title: "Adventure & Exploration", description: "Trekking and outdoor exploration. Group games, barbecue, and music night around the campfire." },
            { day: 3, title: "Leisure & Departure", description: "Morning leisure, Samudra Sadhya (lunch feast), final group activities, and departure." }
        ],
        included: [
            "Stay",
            "Breakfast",
            "Lunch (Samudra Sadhya)",
            "Buffet Dinner",
            "Barbecue",
            "Campfire",
            "Tea & Snacks",
            "Trekking",
            "Transport",
            "All Activities"
        ]
    },
    {
        id: "devotion-trips",
        title: "South India Devotion Trip",
        location: "Kerala & Karnataka, India",
        price: "Contact for Price",
        rating: 4.8,
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=100&w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1600010977281-22961e6fa9a8?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1622308644420-b8fc4d1f21db?auto=format&fit=crop&q=100&w=1200",
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=100&w=1200"
        ],
        tag: "Culture",
        description: "A 4 Nights & 5 Days spiritual journey from Ernakulam covering Mookambika Temple, Kudajadri, Murudeshwar, Udupi, and Guruvayur. Perfect for families and devotional groups seeking temple darshan with scenic beauty and beach visits.",
        highlights: [
            "Mookambika Temple",
            "Kudajadri Trekking",
            "Murudeshwar Temple",
            "Udupi Temple",
            "Parassinikadavu Temple",
            "Kozhikode Beach",
            "Guruvayur Temple",
            "Vadakkunathan Temple"
        ],
        itinerary: [
            { day: 1, title: "Departure from Ernakulam", description: "Pickup from Ernakulam and comfortable road journey toward Karnataka temples. Morning & Evening Aarti experience." },
            { day: 2, title: "Mookambika & Kudajadri", description: "Temple Darshan at Mookambika. Kudajadri Trekking & Nature Viewpoints. Scenic photography at coastal locations." },
            { day: 3, title: "Murudeshwar & Udupi", description: "Temple Darshan at Murudeshwar. Visit Malpe Beach. Temple Darshan at Udupi." },
            { day: 4, title: "Parassinikadavu & Kozhikode", description: "Temple Darshan at Parassinikadavu. Visit Kozhikode Beach. Sightseeing and local market exploration." },
            { day: 5, title: "Guruvayur & Return", description: "Temple Darshan at Guruvayur & Vadakkunathan. Drop-off at Ernakulam." }
        ],
        included: [
            "Pickup & Drop from Ernakulam",
            "4 Nights Accommodation",
            "Temple Visits & Sightseeing as per Itinerary",
            "Beach Visits (Kozhikode & Malpe)",
            "Comfortable Travel between Destinations",
            "Tour Assistance"
        ]
    }
];