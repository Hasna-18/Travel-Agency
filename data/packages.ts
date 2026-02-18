export interface Package {
    id: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    duration: string;
    image: string;
    tag: string;
    description: string;
    highlights: string[];
    itinerary: { day: number; title: string; description: string }[];
    included: string[];
}

export const packages: Package[] = [
    {
        id: "maldives-overwater",
        title: "Maldives Overwater Bliss",
        location: "Maldives, Asia",
        price: "₹29,499",
        rating: 4.9,
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
        tag: "Relaxation",
        description: "Experience the ultimate luxury in our overwater villas. Wake up to the sound of the ocean and enjoy private access to crystal clear waters.",
        highlights: ["Private Villa", "Snorkeling Equipment", "Daily Breakfast", "Spa Credits"],
        itinerary: [
            { day: 1, title: "Arrival", description: "Speedboat transfer to resort and welcome drinks." },
            { day: 2, title: "Island Exploration", description: "Discover the local flora and fauna of the island." },
            { day: 3, title: "Water Sports", description: "Enjoy kayaking, paddleboarding, and more." }
        ],
        included: ["Flights", "Accommodation", "Transfers", "Guided Tours"]
    },
    {
        id: "swiss-alps",
        title: "Swiss Alps Adventure",
        location: "Zermatt, Switzerland",
        price: "₹36,150",
        rating: 4.8,
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800",
        tag: "Adventure",
        description: "A breathtaking journey through the heart of the Swiss Alps. Perfect for thrill-seekers and nature lovers alike.",
        highlights: ["Skiing Pass", "Mountain Chalet Stay", "Alpine Dining", "Cable Car Tours"],
        itinerary: [
            { day: 1, title: "Arrival in Zurich", description: "Train journey to Zermatt with scenic views." },
            { day: 2, title: "Matterhorn Visit", description: "Cable car ride to the highest station in Europe." },
            { day: 3, title: "Glacier Trekking", description: "Guided walk on the Aletsch Glacier." }
        ],
        included: ["Train Passes", "Hotel Stays", "Ski Equipment", "Local Guide"]
    },
    {
        id: "santorini-sunset",
        title: "Santorini Sunset Retreat",
        location: "Oia, Greece",
        price: "₹19,850",
        rating: 4.9,
        duration: "4 Days",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800",
        tag: "Romantic",
        description: "Iconic white-washed buildings and the world's most beautiful sunsets await you in Santorini.",
        highlights: ["Ocean View Suite", "Yacht Cruise", "Wine Tasting", "Cooking Class"],
        itinerary: [
            { day: 1, title: "Sunset Dinner", description: "Welcome dinner overlooking the caldera." },
            { day: 2, title: "Sailing", description: "Private yacht cruise around the volcanic islands." },
            { day: 3, title: "Akrotiri Visit", description: "Explore the ancient Minoan city ruins." }
        ],
        included: ["Breakfast", "Yacht Tour", "Luxury Suite", "Transfers"]
    },
    {
        id: "kyoto-heritage",
        title: "Kyoto Heritage Tour",
        location: "Kyoto, Japan",
        price: "₹28,200",
        rating: 4.7,
        duration: "6 Days",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
        tag: "Culture",
        description: "Step back in time and experience the rich traditions and serene temples of Japan's ancient capital.",
        highlights: ["Tea Ceremony", "Bamboo Forest Walk", "Temple Tours", "Geisha District"],
        itinerary: [
            { day: 1, title: "Kinkaku-ji", description: "Visit the world-famous Golden Pavilion." },
            { day: 2, title: "Arashiyama", description: "Full day in the bamboo grove and monkey park." },
            { day: 3, title: "Gion District", description: "Evening walk through the historical Geisha district." }
        ],
        included: ["Temple Entries", "Local Guide", "Traditional Ryokan", "JR Pass"]
    },
    // {
    //     id: "safari-expedition",
    //     title: "Safari Expedition",
    //     location: "Serengeti, Tanzania",
    //     price: "₹4,500",
    //     rating: 4.9,
    //     duration: "10 Days",
    //     image: "https://images.unsplash.com/photo-1516428990200-50897a5b149b?auto=format&fit=crop&q=80&w=800",
    //     tag: "Wildlife",
    //     description: "The ultimate wildlife experience. Witness the Great Migration and see the 'Big Five' in their natural habitat.",
    //     highlights: ["Game Drives", "Luxury Tented Camp", "Hot Air Balloon", "Masai Village Visit"],
    //     itinerary: [
    //         { day: 1, title: "Arrival in Arusha", description: "Transfer to the Serengeti base camp." },
    //         { day: 2, title: "Big Five Hunt", description: "Full day game drive across the plains." },
    //         { day: 3, title: "Balloon Safari", description: "Sunrise flight over the Serengeti." }
    //     ],
    //     included: ["Eco-lodges", "All Meals", "Park Fees", "Specialist Guide"]
    // },
    {
        id: "iceland-fire-ice",
        title: "Icelandic Fire & Ice",
        location: "Reykjavik, Iceland",
        price: "₹30,299",
        rating: 4.8,
        duration: "8 Days",
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
        tag: "Nature",
        description: "A land of waterfalls, glaciers, and volcanoes. Experience the raw power of nature in Iceland.",
        highlights: ["Blue Lagoon", "Northern Lights", "Golden Circle", "Ice Cave Tour"],
        itinerary: [
            { day: 1, title: "Blue Lagoon", description: "Relax in the geothermal spa after arrival." },
            { day: 2, title: "Golden Circle", description: "Visit Gullfoss, Geysir, and Thingvellir." },
            { day: 3, title: "South Coast", description: "Black sand beaches and towering waterfalls." }
        ],
        included: ["4x4 Vehicle", "Boutique Hotels", "Glacier Gear", "Breakfast"]
    }
];
