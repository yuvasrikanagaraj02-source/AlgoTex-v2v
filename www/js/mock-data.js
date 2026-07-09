// RiseHer Unified Mock Data Library

window.PROFESSIONALS = [
  {
    id: "pro_priya",
    name: "Priya Sharma",
    title: "Bridal Tailoring Specialist",
    category: "Tailoring",
    rating: 4.9,
    reviewsCount: 125,
    location: "Mumbai",
    distance: 2.5,
    price: "₹600",
    priceTier: "Budget",
    availability: "weekdays",
    bio: "Professional tailoring specialist with expertise in bridal wear, blouse stitching, saree pre-pleating, and custom tailoring. Over 5 years of experience delivering high-quality craftsmanship to help you look your best on your special days.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_1", title: "Heavy Zardozi Bridal Blouse", category: "Bridal", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400", views: 240, clicks: 110, saves: 45 },
      { id: "pf_2", title: "Aari Hand Embroidery Detail", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 180, clicks: 80, saves: 32 },
      { id: "pf_3", title: "Pleated Bridal Saree Setup", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400", views: 120, clicks: 45, saves: 18 }
    ],
    services: [
      { id: "srv_1", name: "Designer Blouse Stitching", price: 600, duration: "3 days", description: "Perfect fit designer blouse stitching with custom neck and back patterns." },
      { id: "srv_2", name: "Bridal Lehenga Customization", price: 2500, duration: "7 days", description: "Complete tailoring and custom Zardozi fitting for bridal lehengas." },
      { id: "srv_3", name: "Saree Pre-Pleating & Draping", price: 350, duration: "1 hour", description: "Pre-pleating service to make saree wearing effortless and elegant." }
    ],
    reviews: [
      { id: "rev_1", customerName: "Neha Sharma", rating: 5, date: "28 May 2026", text: "Amazing work! My bridal blouse was perfectly stitched and finished exactly on time. Highly recommend Priya for any bridal work!", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" },
      { id: "rev_2", customerName: "Kavita S.", rating: 4.8, date: "20 May 2026", text: "The stitching quality is top-notch, though there was a slight delay of one day in delivery. Overall very satisfied.", avatarUrl: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]
  },
  {
    id: "pro_meena",
    name: "Meena Beauty Care",
    title: "Professional Beautician",
    category: "Beautician",
    rating: 4.8,
    reviewsCount: 85,
    location: "Coimbatore",
    distance: 1.8,
    price: "₹800",
    priceTier: "Standard",
    availability: "weekends",
    bio: "Certified beauty professional specializing in bridal makeup, organic facials, hair styling, and skin treatments. We bring salon-grade services to the comfort of your home.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_meena_1", title: "Dewy Bridal Makeup Look", category: "Makeup", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400", views: 320, clicks: 150, saves: 62 },
      { id: "pf_meena_2", title: "Bridal Hair Braid & Floral Design", category: "Styling", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400", views: 110, clicks: 50, saves: 14 }
    ],
    services: [
      { id: "srv_meena_1", name: "Bridal Makeup Combo", price: 5000, duration: "3 hours", description: "Premium HD bridal makeup including hairstyling and saree draping." },
      { id: "srv_meena_2", name: "Organic Glow Facial", price: 800, duration: "1.5 hours", description: "Deep cleansing facial using herbal extracts for an instant natural glow." },
      { id: "srv_meena_3", name: "Premium Waxing & Detan", price: 1200, duration: "2 hours", description: "Full arms, full legs waxing along with a soothing detan scrub pack." }
    ],
    reviews: [
      { id: "rev_meena_1", customerName: "Anjali Rao", rating: 5, date: "25 May 2026", text: "Meena is extremely professional and polite. Her bridal makeup work was highly appreciated by everyone at the wedding!", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: "pro_saira",
    name: "Saira Khan",
    title: "Aari Work & Embroidery Artist",
    category: "Embroidery",
    rating: 4.7,
    reviewsCount: 63,
    location: "Chennai",
    distance: 2.3,
    price: "₹500",
    priceTier: "Budget",
    availability: "all",
    bio: "Exquisite hand-craftsman specializing in traditional Aari embroidery, custom Zardozi designs, beadwork, and cutwork borders for designer sarees and blouses.",
    avatar: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_saira_1", title: "Intricate Peacock Aari Blouse Back", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 210, clicks: 92, saves: 40 }
    ],
    services: [
      { id: "srv_saira_1", name: "Basic Aari Neckline Stitch", price: 500, duration: "2 days", description: "Elegant neckline chain stitching with glass beads for daily wear." },
      { id: "srv_saira_2", name: "Heavy Peacock Back Work", price: 3500, duration: "5 days", description: "Detailed peacock design back panel with heavy zari and beadwork." }
    ],
    reviews: [
      { id: "rev_saira_1", customerName: "Pooja V.", rating: 4.5, date: "10 May 2026", text: "Loved the quality of Aari work! Very detailed and clean embroidery. Highly recommend.", avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "01:00 PM", "04:00 PM"]
  },
  {
    id: "pro_anitha",
    name: "Anitha R.",
    title: "Home Chef & Caterer",
    category: "Cooking",
    rating: 4.6,
    reviewsCount: 42,
    location: "Mumbai",
    distance: 3.1,
    price: "₹300",
    priceTier: "Budget",
    availability: "weekends",
    bio: "Home-cooked meals made with love, fresh ingredients, and extreme hygiene. Specializing in South Indian catering, custom party orders, and healthy lunch boxes.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_anitha_1", title: "South Indian Festive Thali Spread", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400", views: 195, clicks: 80, saves: 25 }
    ],
    services: [
      { id: "srv_anitha_1", name: "Healthy Tiffin Service (Weekly)", price: 1200, duration: "7 days", description: "Home-delivered healthy lunch and dinner tiffin sets containing 3 courses." },
      { id: "srv_anitha_2", name: "Mini Catering Package (10-15 Pax)", price: 3000, duration: "1 day", description: "Complete meal catering for small house parties including main and sweets." }
    ],
    reviews: [
      { id: "rev_anitha_1", customerName: "Shanti N.", rating: 4.8, date: "15 May 2026", text: "Amazing homely taste! The spices were perfectly balanced and my guests loved the Biryani. Very hygienic packaging too.", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "12:00 PM", "07:00 PM"]
  },

  {
    id: "pro_lakshmi",
    name: "Lakshmi Designs",
    title: "Blouse Designer & Tailor",
    category: "Tailoring",
    rating: 4.8,
    reviewsCount: 96,
    location: "Chennai",
    distance: 1.4,
    price: "₹700",
    priceTier: "Standard",
    availability: "all",
    bio: "Specialist in bridal blouses, princess-cut blouses, kids pavadai stitching, and custom alterations with neat finishing.",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_lakshmi_1", title: "Maggam Bridal Blouse", category: "Bridal", imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400", views: 230, clicks: 98, saves: 37 },
      { id: "pf_lakshmi_2", title: "Kids Silk Pavadai Set", category: "Kids Wear", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400", views: 145, clicks: 59, saves: 19 }
    ],
    services: [
      { id: "srv_lakshmi_1", name: "Princess Cut Blouse", price: 700, duration: "3 days", description: "Elegant blouse stitching with shaping and lining." },
      { id: "srv_lakshmi_2", name: "Kids Pavadai Stitching", price: 900, duration: "4 days", description: "Festive ethnic wear stitching for children." },
      { id: "srv_lakshmi_3", name: "Alteration & Refit", price: 250, duration: "1 day", description: "Quick size adjustments for blouses and lehengas." }
    ],
    reviews: [
      { id: "rev_lakshmi_1", customerName: "Divya R.", rating: 4.9, date: "02 Jun 2026", text: "Very neat finishing and excellent fitting for my reception blouse.", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:30 AM", "11:30 AM", "02:30 PM", "05:30 PM"]
  },
  {
    id: "pro_kavya",
    name: "Kavya Glow Studio",
    title: "Bridal Makeup Artist",
    category: "Beautician",
    rating: 4.9,
    reviewsCount: 142,
    location: "Bengaluru",
    distance: 2.1,
    price: "₹1500",
    priceTier: "Premium",
    availability: "all",
    bio: "HD bridal makeup artist focused on natural glam, engagement looks, reception styling, and airbrush finishing.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_kavya_1", title: "Soft Glam Bridal Finish", category: "Makeup", imageUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=400", views: 380, clicks: 170, saves: 70 },
      { id: "pf_kavya_2", title: "Reception Hair Bun Styling", category: "Hair", imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400", views: 190, clicks: 77, saves: 24 }
    ],
    services: [
      { id: "srv_kavya_1", name: "HD Bridal Makeup", price: 6500, duration: "3.5 hours", description: "Long-lasting HD bridal base, eye makeup, lashes and hairstyling." },
      { id: "srv_kavya_2", name: "Engagement Makeup", price: 3500, duration: "2 hours", description: "Elegant occasion makeup with hair styling." },
      { id: "srv_kavya_3", name: "Hair Styling Only", price: 1200, duration: "1 hour", description: "Party bun, curls, braid or sleek styling." }
    ],
    reviews: [
      { id: "rev_kavya_1", customerName: "Roshni P.", rating: 5, date: "30 May 2026", text: "The base looked flawless in photos and stayed fresh throughout the event.", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "10:00 AM", "01:00 PM", "04:00 PM"]
  },
  {
    id: "pro_farzana",
    name: "Farzana Threads",
    title: "Zardozi & Handwork Expert",
    category: "Embroidery",
    rating: 4.8,
    reviewsCount: 71,
    location: "Hyderabad",
    distance: 3.4,
    price: "₹900",
    priceTier: "Standard",
    availability: "weekdays",
    bio: "Traditional hand embroidery specialist for bridal blouses, dupatta borders, motifs, sequins, cutdana, and mirror detailing.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_farzana_1", title: "Cutdana Bridal Sleeve Work", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 205, clicks: 88, saves: 36 }
    ],
    services: [
      { id: "srv_farzana_1", name: "Dupatta Border Embroidery", price: 900, duration: "3 days", description: "Elegant border work with beads and sequins." },
      { id: "srv_farzana_2", name: "Bridal Blouse Full Work", price: 4200, duration: "6 days", description: "Heavy hand embroidery for front, back and sleeves." }
    ],
    reviews: [
      { id: "rev_farzana_1", customerName: "Hina K.", rating: 4.8, date: "12 Jun 2026", text: "Beautiful craftsmanship and neat finishing on my wedding blouse sleeves.", avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:30 AM", "12:30 PM", "03:30 PM"]
  },
  {
    id: "pro_revathi",
    name: "Revathi Home Foods",
    title: "Traditional Home Chef",
    category: "Cooking",
    rating: 4.7,
    reviewsCount: 54,
    location: "Chennai",
    distance: 2.7,
    price: "₹350",
    priceTier: "Budget",
    availability: "all",
    bio: "Authentic South Indian home chef offering daily meals, millet-based dishes, festival sweets, and small-event catering.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_revathi_1", title: "Mini Meals Banana Leaf Setup", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400", views: 165, clicks: 66, saves: 20 }
    ],
    services: [
      { id: "srv_revathi_1", name: "Daily Lunch Box", price: 350, duration: "1 day", description: "Fresh lunch with rice, curry, poriyal and dessert." },
      { id: "srv_revathi_2", name: "Festival Sweet Box", price: 1200, duration: "1 day", description: "Assorted homemade sweets for pooja and gifting." },
      { id: "srv_revathi_3", name: "House Event Catering", price: 4500, duration: "1 day", description: "Traditional menu for 15-20 guests." }
    ],
    reviews: [
      { id: "rev_revathi_1", customerName: "Gayathri M.", rating: 4.7, date: "05 Jun 2026", text: "Food tasted just like home and delivery was on time.", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:30 AM", "11:30 AM", "06:30 PM"]
  },
  {
    id: "pro_nandini",
    name: "Nandini Couture",
    title: "Boutique Tailor",
    category: "Tailoring",
    rating: 4.6,
    reviewsCount: 61,
    location: "Pune",
    distance: 4.2,
    price: "₹550",
    priceTier: "Budget",
    availability: "weekdays",
    bio: "Boutique tailoring for kurtis, salwar sets, office wear alterations, and festive ethnic outfits with clean, wearable fits.",
    avatar: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_nandini_1", title: "Office Kurti Set", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=400", views: 140, clicks: 53, saves: 17 }
    ],
    services: [
      { id: "srv_nandini_1", name: "Kurti Stitching", price: 550, duration: "2 days", description: "Comfortable everyday kurti stitching with lining if needed." },
      { id: "srv_nandini_2", name: "Pant Alteration", price: 180, duration: "1 day", description: "Waist and length adjustment for bottoms." }
    ],
    reviews: [
      { id: "rev_nandini_1", customerName: "Sneha T.", rating: 4.6, date: "18 May 2026", text: "Good fit and reasonable pricing for regular office wear stitching.", avatarUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df2?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "01:00 PM", "03:00 PM"]
  },
  {
    id: "pro_hema",
    name: "Hema Bridal Studio",
    title: "Beautician & Saree Drapist",
    category: "Beautician",
    rating: 4.8,
    reviewsCount: 90,
    location: "Madurai",
    distance: 2.9,
    price: "₹1000",
    priceTier: "Standard",
    availability: "weekends",
    bio: "Occasion makeup artist with bridal draping, flower jewelry setup, simple reception looks, and mature-skin makeup services.",
    avatar: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_hema_1", title: "Temple Wedding Makeup", category: "Makeup", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400", views: 260, clicks: 108, saves: 41 }
    ],
    services: [
      { id: "srv_hema_1", name: "Bridal Saree Draping", price: 1000, duration: "45 mins", description: "Traditional and modern saree draping styles." },
      { id: "srv_hema_2", name: "Reception Makeup", price: 3000, duration: "2 hours", description: "Elegant makeup with matching hairstyle." }
    ],
    reviews: [
      { id: "rev_hema_1", customerName: "Keerthana L.", rating: 4.9, date: "09 Jun 2026", text: "The saree draping stayed perfect through the entire muhurtham.", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["06:00 AM", "09:00 AM", "02:00 PM", "05:00 PM"]
  },
  {
    id: "pro_yasmin",
    name: "Yasmin Needle Arts",
    title: "Custom Embroidery Designer",
    category: "Embroidery",
    rating: 4.7,
    reviewsCount: 58,
    location: "Bengaluru",
    distance: 3.0,
    price: "₹650",
    priceTier: "Budget",
    availability: "all",
    bio: "Designer embroidery artist for names, monograms, blouse patches, kids costume embellishments, and festive motif work.",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_yasmin_1", title: "Floral Sleeve Motifs", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400", views: 155, clicks: 61, saves: 22 }
    ],
    services: [
      { id: "srv_yasmin_1", name: "Monogram Embroidery", price: 650, duration: "2 days", description: "Custom initials and name embroidery on blouses and dupattas." },
      { id: "srv_yasmin_2", name: "Kids Costume Patch Work", price: 1200, duration: "3 days", description: "Decorative embellishment for dance and school costumes." }
    ],
    reviews: [
      { id: "rev_yasmin_1", customerName: "Fathima A.", rating: 4.7, date: "22 May 2026", text: "Very creative work and she was open to customizing the design.", avatarUrl: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["11:00 AM", "01:30 PM", "04:30 PM"]
  },
  {
    id: "pro_savithri",
    name: "Savithri Kitchen",
    title: "Snacks & Sweets Specialist",
    category: "Cooking",
    rating: 4.9,
    reviewsCount: 113,
    location: "Coimbatore",
    distance: 1.2,
    price: "₹400",
    priceTier: "Budget",
    availability: "all",
    bio: "Homemade murukku, laddoo, adhirasam, mixture, and festive snack boxes prepared in small batches with hygienic packaging.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_savithri_1", title: "Festival Snack Hamper", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400", views: 280, clicks: 118, saves: 49 }
    ],
    services: [
      { id: "srv_savithri_1", name: "Mixed Snacks Box", price: 400, duration: "Same day", description: "Fresh homemade murukku, mixture and ribbon pakoda combo." },
      { id: "srv_savithri_2", name: "Sweet Box (1 Kg)", price: 850, duration: "Same day", description: "Assorted laddoo, mysore pak and jangiri." }
    ],
    reviews: [
      { id: "rev_savithri_1", customerName: "Nalini S.", rating: 5, date: "08 Jun 2026", text: "Excellent taste, crisp snacks and very neat packing.", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "12:00 PM", "04:00 PM", "06:00 PM"]
  },

  {
    id: "pro_deepa",
    name: "Deepa Silks Tailoring",
    title: "Silk Saree Blouse Tailor",
    category: "Tailoring",
    rating: 4.7,
    reviewsCount: 68,
    location: "Kanchipuram",
    distance: 2.6,
    price: "₹750",
    priceTier: "Standard",
    availability: "weekdays",
    bio: "Specialized in silk saree blouses, temple borders, padded blouses, and festive wear stitching with traditional finishing.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_deepa_1", title: "Traditional Silk Blouse", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400", views: 188, clicks: 74, saves: 28 }
    ],
    services: [
      { id: "srv_deepa_1", name: "Silk Blouse Stitching", price: 750, duration: "3 days", description: "Traditional blouse stitching for pattu sarees." },
      { id: "srv_deepa_2", name: "Padded Bridal Blouse", price: 1400, duration: "5 days", description: "Structured padded blouse with premium finishing." }
    ],
    reviews: [
      { id: "rev_deepa_1", customerName: "Uma R.", rating: 4.8, date: "14 Jun 2026", text: "The blouse fit perfectly and matched my saree beautifully.", avatarUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df2?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "12:00 PM", "03:00 PM"]
  },
  {
    id: "pro_rubina",
    name: "Rubina Makeover Lounge",
    title: "Party Makeup Artist",
    category: "Beautician",
    rating: 4.6,
    reviewsCount: 57,
    location: "Hyderabad",
    distance: 1.9,
    price: "₹1200",
    priceTier: "Standard",
    availability: "all",
    bio: "Professional makeup artist for party looks, festive glam, hairstyle setting, brows, and pre-event skin prep.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_rubina_1", title: "Evening Party Look", category: "Makeup", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400", views: 172, clicks: 68, saves: 21 }
    ],
    services: [
      { id: "srv_rubina_1", name: "Party Makeup", price: 2500, duration: "1.5 hours", description: "Photo-ready makeup for birthdays and receptions." },
      { id: "srv_rubina_2", name: "Hair Ironing & Curls", price: 1200, duration: "45 mins", description: "Professional hair styling for events." }
    ],
    reviews: [
      { id: "rev_rubina_1", customerName: "Sana M.", rating: 4.6, date: "03 Jun 2026", text: "Good makeup finish and fast service before my engagement.", avatarUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "11:00 AM", "02:00 PM", "05:00 PM"]
  },
  {
    id: "pro_noor",
    name: "Noor Hand Embroidery",
    title: "Mirror Work Specialist",
    category: "Embroidery",
    rating: 4.8,
    reviewsCount: 64,
    location: "Ahmedabad",
    distance: 4.5,
    price: "₹700",
    priceTier: "Standard",
    availability: "weekends",
    bio: "Mirror work, thread work, kutchi-inspired embroidery, and handcrafted embellishments for festive and fusion wear.",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_noor_1", title: "Mirror Work Dupatta Border", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400", views: 214, clicks: 81, saves: 33 }
    ],
    services: [
      { id: "srv_noor_1", name: "Mirror Work Panel", price: 700, duration: "3 days", description: "Decorative hand mirror work for kurtis and blouses." },
      { id: "srv_noor_2", name: "Festive Dupatta Work", price: 1500, duration: "4 days", description: "Border and motif embellishment for dupattas." }
    ],
    reviews: [
      { id: "rev_noor_1", customerName: "Ritu B.", rating: 4.8, date: "01 Jun 2026", text: "Very vibrant and clean work, great for Navratri outfits.", avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:30 AM", "01:30 PM", "04:30 PM"]
  },
  {
    id: "pro_malini",
    name: "Malini Meals",
    title: "Healthy Home Chef",
    category: "Cooking",
    rating: 4.8,
    reviewsCount: 77,
    location: "Bengaluru",
    distance: 2.8,
    price: "₹450",
    priceTier: "Standard",
    availability: "weekdays",
    bio: "Nutritious meal prep specialist offering diabetic-friendly food, millet bowls, office lunches, and weekly subscriptions.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_malini_1", title: "Healthy Millet Lunch Box", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400", views: 201, clicks: 88, saves: 29 }
    ],
    services: [
      { id: "srv_malini_1", name: "Healthy Lunch Subscription", price: 1800, duration: "5 days", description: "Balanced weekday lunch plan with rotating menu." },
      { id: "srv_malini_2", name: "Diabetic-Friendly Meal", price: 450, duration: "1 day", description: "Controlled portion meal with low oil and low sugar ingredients." }
    ],
    reviews: [
      { id: "rev_malini_1", customerName: "Archana G.", rating: 4.8, date: "07 Jun 2026", text: "Tasty and healthy food, perfect for my office routine.", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "12:30 PM", "07:30 PM"]
  },
  {
    id: "pro_bhavana",
    name: "Bhavana Fashions",
    title: "Lehenga & Gown Tailor",
    category: "Tailoring",
    rating: 4.9,
    reviewsCount: 104,
    location: "Delhi",
    distance: 3.5,
    price: "₹950",
    priceTier: "Premium",
    availability: "all",
    bio: "Custom lehenga and gown tailoring for engagements, receptions, and bridesmaids with boutique-grade pattern finishing.",
    avatar: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_bhavana_1", title: "Reception Gown Fitting", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400", views: 300, clicks: 125, saves: 52 }
    ],
    services: [
      { id: "srv_bhavana_1", name: "Custom Lehenga Stitching", price: 3200, duration: "8 days", description: "Full lehenga, blouse and dupatta finishing." },
      { id: "srv_bhavana_2", name: "Occasion Gown Alteration", price: 950, duration: "2 days", description: "Bust, waist and hem adjustments for gowns." }
    ],
    reviews: [
      { id: "rev_bhavana_1", customerName: "Ishita D.", rating: 5, date: "27 May 2026", text: "Boutique-quality work and a very polished final fit.", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:30 AM", "12:30 PM", "03:30 PM", "06:00 PM"]
  },
  {
    id: "pro_jothi",
    name: "Jothi Bridal Glow",
    title: "Skin & Makeup Specialist",
    category: "Beautician",
    rating: 4.7,
    reviewsCount: 70,
    location: "Chennai",
    distance: 1.7,
    price: "₹900",
    priceTier: "Standard",
    availability: "all",
    bio: "Bridal skin prep, facials, detan, light makeup and hair finishing for traditional ceremonies and family functions.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_jothi_1", title: "Haldi Function Glow Look", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400", views: 185, clicks: 72, saves: 26 }
    ],
    services: [
      { id: "srv_jothi_1", name: "Detan Facial", price: 900, duration: "1 hour", description: "Instant fresh glow facial before events." },
      { id: "srv_jothi_2", name: "Light Occasion Makeup", price: 1800, duration: "1.5 hours", description: "Simple makeup and hairstyle for pooja and family events." }
    ],
    reviews: [
      { id: "rev_jothi_1", customerName: "Lavanya P.", rating: 4.7, date: "24 May 2026", text: "Good for subtle makeup and very punctual service.", avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:30 AM", "10:30 AM", "01:30 PM", "04:30 PM"]
  },
  {
    id: "pro_rehana",
    name: "Rehana Aari Works",
    title: "Bridal Aari Artisan",
    category: "Embroidery",
    rating: 4.9,
    reviewsCount: 118,
    location: "Chennai",
    distance: 2.0,
    price: "₹1100",
    priceTier: "Premium",
    availability: "weekdays",
    bio: "Premium bridal Aari work with stones, sequins, zardosi lines, motifs, sleeve highlights, and custom blouse concepts.",
    avatar: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_rehana_1", title: "Stone Work Bridal Back Neck", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 341, clicks: 141, saves: 59 }
    ],
    services: [
      { id: "srv_rehana_1", name: "Heavy Bridal Neck Work", price: 2800, duration: "4 days", description: "Luxury handwork for neck, sleeve and back neck." },
      { id: "srv_rehana_2", name: "Custom Motif Work", price: 1100, duration: "2 days", description: "Unique hand-drawn motif embroidery placement." }
    ],
    reviews: [
      { id: "rev_rehana_1", customerName: "Bhavya K.", rating: 5, date: "11 Jun 2026", text: "Her Aari work elevated the blouse completely. Stunning detailing.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "12:00 PM", "02:30 PM"]
  },
  {
    id: "pro_sudha",
    name: "Sudha Caterers",
    title: "Small Event Caterer",
    category: "Cooking",
    rating: 4.6,
    reviewsCount: 49,
    location: "Salem",
    distance: 4.1,
    price: "₹500",
    priceTier: "Standard",
    availability: "weekends",
    bio: "Small event catering specialist for birthday functions, naming ceremonies, office snacks, and packed meal services.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_sudha_1", title: "Packed Meals for House Event", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400", views: 132, clicks: 48, saves: 15 }
    ],
    services: [
      { id: "srv_sudha_1", name: "Packed Lunch Combo", price: 500, duration: "1 day", description: "Rice, curry, side dish and sweet packed hygienically." },
      { id: "srv_sudha_2", name: "Birthday Snack Setup", price: 2800, duration: "1 day", description: "Mini tiffin and snack menu for 15 guests." }
    ],
    reviews: [
      { id: "rev_sudha_1", customerName: "Mohanapriya V.", rating: 4.6, date: "19 May 2026", text: "Simple and tasty food, good option for small family functions.", avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["07:00 AM", "11:00 AM", "05:00 PM"]
  },

  {
    id: "pro_keerthi",
    name: "Keerthi Creations",
    title: "Kids Wear Tailor",
    category: "Tailoring",
    rating: 4.7,
    reviewsCount: 55,
    location: "Vijayawada",
    distance: 2.2,
    price: "₹450",
    priceTier: "Budget",
    availability: "all",
    bio: "Tailoring service for kids lehengas, frocks, dance costumes, and festive family matching outfits.",
    avatar: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_keerthi_1", title: "Kids Festive Lehenga", category: "Kids Wear", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400", views: 149, clicks: 57, saves: 20 }
    ],
    services: [
      { id: "srv_keerthi_1", name: "Kids Frock Stitching", price: 450, duration: "2 days", description: "Cute custom frocks with neat lining and finishing." },
      { id: "srv_keerthi_2", name: "Dance Costume Stitching", price: 1300, duration: "4 days", description: "Comfortable and secure costume stitching for performances." }
    ],
    reviews: [
      { id: "rev_keerthi_1", customerName: "Pranathi S.", rating: 4.7, date: "26 May 2026", text: "My daughter’s costume fit perfectly and looked lovely on stage.", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "12:00 PM", "03:00 PM"]
  },
  {
    id: "pro_riya",
    name: "Riya Beauty Hub",
    title: "Hair & Makeup Professional",
    category: "Beautician",
    rating: 4.8,
    reviewsCount: 87,
    location: "Pune",
    distance: 2.4,
    price: "₹1300",
    priceTier: "Standard",
    availability: "weekends",
    bio: "Hair styling, subtle makeup, nail prep, and pre-wedding home services for bridesmaids and family members.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_riya_1", title: "Bridesmaid Hair Curls", category: "Hair", imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400", views: 210, clicks: 85, saves: 29 }
    ],
    services: [
      { id: "srv_riya_1", name: "Family Function Makeup", price: 2200, duration: "1.5 hours", description: "Subtle glow makeup for close family functions." },
      { id: "srv_riya_2", name: "Hair Styling Package", price: 1300, duration: "1 hour", description: "Curls, bun, braids and accessorized hairstyles." }
    ],
    reviews: [
      { id: "rev_riya_1", customerName: "Namrata C.", rating: 4.8, date: "04 Jun 2026", text: "Very professional and gave a polished but natural look.", avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "10:00 AM", "01:00 PM", "03:00 PM"]
  },
  {
    id: "pro_shalini",
    name: "Shalini Stitches",
    title: "Hand Embroidery Specialist",
    category: "Embroidery",
    rating: 4.6,
    reviewsCount: 44,
    location: "Jaipur",
    distance: 3.7,
    price: "₹550",
    priceTier: "Budget",
    availability: "all",
    bio: "Light hand embroidery for kurtas, potli bags, festive blouse sleeves, and customized return gift accessories.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_shalini_1", title: "Floral Potli Handwork", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400", views: 118, clicks: 41, saves: 14 }
    ],
    services: [
      { id: "srv_shalini_1", name: "Sleeve Embroidery", price: 550, duration: "2 days", description: "Light motif work for festive blouse sleeves." },
      { id: "srv_shalini_2", name: "Potli Bag Embellishment", price: 850, duration: "2 days", description: "Decorative bead and threadwork on custom potli bags." }
    ],
    reviews: [
      { id: "rev_shalini_1", customerName: "Pallavi J.", rating: 4.5, date: "21 May 2026", text: "Nice finishing and cute detailing on the return gift bags.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["11:00 AM", "02:00 PM", "05:00 PM"]
  },
  {
    id: "pro_geetha",
    name: "Geetha Homemade Delights",
    title: "Tiffin & Snack Cook",
    category: "Cooking",
    rating: 4.7,
    reviewsCount: 66,
    location: "Chennai",
    distance: 1.3,
    price: "₹250",
    priceTier: "Budget",
    availability: "all",
    bio: "Fresh idli batter, chutneys, evening snacks, and breakfast boxes for working families and students.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_geetha_1", title: "Breakfast Tiffin Combo", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400", views: 175, clicks: 69, saves: 21 }
    ],
    services: [
      { id: "srv_geetha_1", name: "Breakfast Combo", price: 250, duration: "Same day", description: "Idli, dosa or pongal combo with chutney and sambar." },
      { id: "srv_geetha_2", name: "Evening Snacks Box", price: 300, duration: "Same day", description: "Fresh bajji, bonda or sundal box for 4 people." }
    ],
    reviews: [
      { id: "rev_geetha_1", customerName: "Harini E.", rating: 4.7, date: "06 Jun 2026", text: "Good taste and very convenient for busy weekdays.", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["07:30 AM", "10:30 AM", "04:30 PM"]
  },
  {
    id: "pro_vaishnavi",
    name: "Vaishnavi Tailor Point",
    title: "Ladies Tailor",
    category: "Tailoring",
    rating: 4.5,
    reviewsCount: 39,
    location: "Tiruppur",
    distance: 3.8,
    price: "₹400",
    priceTier: "Budget",
    availability: "weekdays",
    bio: "Affordable women’s tailoring for cotton blouses, salwar sets, uniforms, and minor fitting alterations.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_vaishnavi_1", title: "Daily Wear Blouse", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=400", views: 90, clicks: 28, saves: 9 }
    ],
    services: [
      { id: "srv_vaishnavi_1", name: "Basic Blouse Stitching", price: 400, duration: "2 days", description: "Simple blouse stitching for regular wear." },
      { id: "srv_vaishnavi_2", name: "Salwar Stitching", price: 650, duration: "3 days", description: "Comfortable stitched salwar set with dupatta finishing." }
    ],
    reviews: [
      { id: "rev_vaishnavi_1", customerName: "Kowsalya P.", rating: 4.5, date: "17 May 2026", text: "Budget-friendly and decent fitting for regular use.", avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:30 AM", "01:30 PM", "04:30 PM"]
  },
  {
    id: "pro_muskan",
    name: "Muskan Bridal Looks",
    title: "Mehendi & Makeup Artist",
    category: "Beautician",
    rating: 4.9,
    reviewsCount: 120,
    location: "Delhi",
    distance: 2.2,
    price: "₹1800",
    priceTier: "Premium",
    availability: "all",
    bio: "Bridal and festive artist offering Arabic mehendi, engagement makeup, family package styling, and quick event touch-ups.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_muskan_1", title: "Arabic Mehendi + Soft Glam", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400", views: 360, clicks: 148, saves: 61 }
    ],
    services: [
      { id: "srv_muskan_1", name: "Arabic Mehendi", price: 1800, duration: "1.5 hours", description: "Elegant Arabic mehendi for hands." },
      { id: "srv_muskan_2", name: "Engagement Makeup Package", price: 4200, duration: "2.5 hours", description: "Makeup, hairstyling and dupatta setting." }
    ],
    reviews: [
      { id: "rev_muskan_1", customerName: "Tanvi N.", rating: 5, date: "31 May 2026", text: "Loved both the mehendi design and makeup finish. Great experience.", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["07:30 AM", "10:30 AM", "01:30 PM", "05:30 PM"]
  },
  {
    id: "pro_habiba",
    name: "Habiba Zari House",
    title: "Zari & Sequins Artist",
    category: "Embroidery",
    rating: 4.7,
    reviewsCount: 62,
    location: "Lucknow",
    distance: 4.0,
    price: "₹800",
    priceTier: "Standard",
    availability: "weekdays",
    bio: "Fine zari work, dabka detailing, sequins finishing, and wedding accessory embellishment for ethnic garments.",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_habiba_1", title: "Sequins Border Highlight", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400", views: 167, clicks: 63, saves: 24 }
    ],
    services: [
      { id: "srv_habiba_1", name: "Zari Border Work", price: 800, duration: "3 days", description: "Traditional zari border finishing for dupattas and lehengas." },
      { id: "srv_habiba_2", name: "Blouse Sleeve Sequins Work", price: 1400, duration: "3 days", description: "Sparkling sleeve highlight work for festive outfits." }
    ],
    reviews: [
      { id: "rev_habiba_1", customerName: "Farah J.", rating: 4.7, date: "10 Jun 2026", text: "Good detailed work and timely completion before Eid.", avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "01:00 PM", "04:00 PM"]
  },
  {
    id: "pro_latha",
    name: "Latha Lunch Box",
    title: "Office Lunch Specialist",
    category: "Cooking",
    rating: 4.8,
    reviewsCount: 81,
    location: "Chennai",
    distance: 2.1,
    price: "₹320",
    priceTier: "Budget",
    availability: "weekdays",
    bio: "Fresh office lunch delivery with variety rice, chapati combos, curd rice, and homestyle side dishes.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_latha_1", title: "Office Lunch Thali", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400", views: 222, clicks: 93, saves: 31 }
    ],
    services: [
      { id: "srv_latha_1", name: "Single Meal Box", price: 320, duration: "Same day", description: "Balanced lunch with rice, curry and poriyal." },
      { id: "srv_latha_2", name: "Weekly Office Plan", price: 1500, duration: "5 days", description: "Mon-Fri rotating lunch menu delivered daily." }
    ],
    reviews: [
      { id: "rev_latha_1", customerName: "Sindhu A.", rating: 4.8, date: "13 Jun 2026", text: "Reliable delivery and the food quality stays consistent.", avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "12:00 PM", "06:30 PM"]
  },

  {
    id: "pro_vidhya",
    name: "Vidhya Bridal Threads",
    title: "Designer Blouse Tailor",
    category: "Tailoring",
    rating: 4.8,
    reviewsCount: 93,
    location: "Trichy",
    distance: 2.7,
    price: "₹680",
    priceTier: "Standard",
    availability: "all",
    bio: "Designer blouse tailoring with tassels, latkans, piping, cup stitching, and trendy back neck patterns.",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df2?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_vidhya_1", title: "Trendy Back Neck Blouse", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400", views: 245, clicks: 97, saves: 35 }
    ],
    services: [
      { id: "srv_vidhya_1", name: "Trendy Blouse Stitching", price: 680, duration: "3 days", description: "Fashion blouse stitching with modern patterns." },
      { id: "srv_vidhya_2", name: "Latkan & Tassel Finish", price: 250, duration: "1 day", description: "Decorative blouse and lehenga finishing." }
    ],
    reviews: [
      { id: "rev_vidhya_1", customerName: "Monika S.", rating: 4.8, date: "29 May 2026", text: "Loved the trendy design suggestions and final stitching.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "11:00 AM", "02:00 PM", "05:00 PM"]
  },
  {
    id: "pro_pallavi",
    name: "Pallavi Salon at Home",
    title: "Salon-at-Home Expert",
    category: "Beautician",
    rating: 4.7,
    reviewsCount: 73,
    location: "Mysuru",
    distance: 1.6,
    price: "₹850",
    priceTier: "Standard",
    availability: "all",
    bio: "Salon-at-home professional for cleanup, facials, waxing, threading, and simple function-ready makeup.",
    avatar: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_pallavi_1", title: "Fresh Event Glow", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400", views: 166, clicks: 60, saves: 18 }
    ],
    services: [
      { id: "srv_pallavi_1", name: "Cleanup + Threading", price: 850, duration: "1 hour", description: "Quick freshen-up package before events." },
      { id: "srv_pallavi_2", name: "Basic Makeup at Home", price: 1600, duration: "1 hour", description: "Simple event makeup with light hairstyle." }
    ],
    reviews: [
      { id: "rev_pallavi_1", customerName: "Kirthi V.", rating: 4.7, date: "16 Jun 2026", text: "Very convenient home service and neatly done cleanup.", avatarUrl: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:30 AM", "12:30 PM", "03:30 PM"]
  },
  {
    id: "pro_nazia",
    name: "Nazia Handcraft Studio",
    title: "Beadwork & Stone Work Artist",
    category: "Embroidery",
    rating: 4.8,
    reviewsCount: 80,
    location: "Mumbai",
    distance: 2.9,
    price: "₹950",
    priceTier: "Premium",
    availability: "weekends",
    bio: "Elegant beadwork, sequins, crystals, and custom hand embellishment for bridal and festive wear.",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_nazia_1", title: "Crystal Sleeve Highlight", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 233, clicks: 91, saves: 34 }
    ],
    services: [
      { id: "srv_nazia_1", name: "Stone Work Neck Design", price: 950, duration: "2 days", description: "Crystal and beadwork for necklines." },
      { id: "srv_nazia_2", name: "Bridal Full Hand Embellishment", price: 4800, duration: "6 days", description: "Luxury bead and crystal finishing for bridal pieces." }
    ],
    reviews: [
      { id: "rev_nazia_1", customerName: "Aafreen S.", rating: 4.8, date: "02 Jun 2026", text: "The crystal work looked premium and photographed beautifully.", avatarUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["11:00 AM", "01:00 PM", "04:00 PM"]
  },
  {
    id: "pro_kokila",
    name: "Kokila Catering Service",
    title: "Festive Cooking Expert",
    category: "Cooking",
    rating: 4.7,
    reviewsCount: 58,
    location: "Erode",
    distance: 3.6,
    price: "₹380",
    priceTier: "Budget",
    availability: "weekends",
    bio: "Festival cooking specialist for pooja prasadam, sweet pongal, sundal, mini meals, and family get-togethers.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_kokila_1", title: "Pooja Prasadam Set", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400", views: 144, clicks: 50, saves: 16 }
    ],
    services: [
      { id: "srv_kokila_1", name: "Prasadam Combo", price: 380, duration: "Same day", description: "Sweet pongal, sundal and vadai combo." },
      { id: "srv_kokila_2", name: "Mini Meals for 10", price: 2600, duration: "1 day", description: "Traditional lunch setup for family pooja." }
    ],
    reviews: [
      { id: "rev_kokila_1", customerName: "Meera H.", rating: 4.7, date: "09 May 2026", text: "Very authentic taste and ideal for pooja arrangements.", avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["07:30 AM", "11:30 AM", "05:30 PM"]
  },
  {
    id: "pro_asha",
    name: "Asha Alter Studio",
    title: "Alteration Specialist",
    category: "Tailoring",
    rating: 4.6,
    reviewsCount: 52,
    location: "Bengaluru",
    distance: 1.5,
    price: "₹250",
    priceTier: "Budget",
    availability: "all",
    bio: "Quick alteration expert for jeans, tops, kurtis, blouses, and minor fitting corrections with same-day options.",
    avatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_asha_1", title: "Altered Party Blouse", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=400", views: 108, clicks: 40, saves: 11 }
    ],
    services: [
      { id: "srv_asha_1", name: "Blouse Alteration", price: 250, duration: "Same day", description: "Bust, waist and sleeve adjustments for blouses." },
      { id: "srv_asha_2", name: "Jeans Length Alteration", price: 200, duration: "Same day", description: "Neat hemming with original finish." }
    ],
    reviews: [
      { id: "rev_asha_1", customerName: "Neelima R.", rating: 4.6, date: "01 May 2026", text: "Fast service and very useful for urgent alterations.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"]
  },
  {
    id: "pro_sonia",
    name: "Sonia Glam Box",
    title: "Nail & Makeup Artist",
    category: "Beautician",
    rating: 4.8,
    reviewsCount: 69,
    location: "Mumbai",
    distance: 2.6,
    price: "₹1100",
    priceTier: "Standard",
    availability: "all",
    bio: "Specialized in nails, party makeup, hairstyling and quick grooming packages for events and photoshoots.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_sonia_1", title: "Cocktail Party Look", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=400", views: 184, clicks: 70, saves: 23 }
    ],
    services: [
      { id: "srv_sonia_1", name: "Party Makeup + Hair", price: 2800, duration: "2 hours", description: "Complete grooming for evening events." },
      { id: "srv_sonia_2", name: "Basic Nail Extension", price: 1100, duration: "1.5 hours", description: "Simple elegant nail extension set." }
    ],
    reviews: [
      { id: "rev_sonia_1", customerName: "Rhea M.", rating: 4.8, date: "15 Jun 2026", text: "Loved the hairstyle and the makeup was very camera-friendly.", avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "12:00 PM", "02:30 PM", "05:30 PM"]
  },
  {
    id: "pro_firdous",
    name: "Firdous Craft Works",
    title: "Aari & Maggam Artist",
    category: "Embroidery",
    rating: 4.9,
    reviewsCount: 97,
    location: "Vellore",
    distance: 3.1,
    price: "₹1000",
    priceTier: "Premium",
    availability: "weekdays",
    bio: "Premium maggam and Aari artist focused on bridal blouses, sleeve patches, motifs, and layered hand embellishments.",
    avatar: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_firdous_1", title: "Maggam Bridal Sleeve Panel", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400", views: 271, clicks: 109, saves: 42 }
    ],
    services: [
      { id: "srv_firdous_1", name: "Maggam Sleeve Work", price: 1000, duration: "2 days", description: "Dense handwork for bridal and festive sleeves." },
      { id: "srv_firdous_2", name: "Premium Bridal Set", price: 5200, duration: "7 days", description: "Complete bridal blouse heavy work package." }
    ],
    reviews: [
      { id: "rev_firdous_1", customerName: "Janani T.", rating: 5, date: "28 May 2026", text: "The detailing was truly bridal-level and worth the price.", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:30 AM", "12:30 PM", "03:30 PM"]
  },
  {
    id: "pro_parvathi",
    name: "Parvathi Kitchen Stories",
    title: "Traditional Sweets Cook",
    category: "Cooking",
    rating: 4.9,
    reviewsCount: 101,
    location: "Madurai",
    distance: 2.4,
    price: "₹450",
    priceTier: "Standard",
    availability: "all",
    bio: "Traditional sweets and savories specialist for weddings, seemantham functions, return gifts, and bulk festive orders.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_parvathi_1", title: "Wedding Sweet Box", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400", views: 299, clicks: 121, saves: 46 }
    ],
    services: [
      { id: "srv_parvathi_1", name: "Sweet Box Bulk Order", price: 450, duration: "1 day", description: "Per box rate for customized wedding sweet assortments." },
      { id: "srv_parvathi_2", name: "Savory Pack Bulk Order", price: 380, duration: "1 day", description: "Mini mixture, murukku and ribbon pakoda packs." }
    ],
    reviews: [
      { id: "rev_parvathi_1", customerName: "Viji K.", rating: 5, date: "12 Jun 2026", text: "Everyone loved the sweets. Perfect for our family function.", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:30 AM", "11:30 AM", "04:30 PM"]
  },

  {
    id: "pro_nila",
    name: "Nila Boutique Tailors",
    title: "Boutique Tailoring Expert",
    category: "Tailoring",
    rating: 4.7,
    reviewsCount: 74,
    location: "Chennai",
    distance: 1.9,
    price: "₹620",
    priceTier: "Standard",
    availability: "all",
    bio: "Boutique ladies tailoring with specialty in designer sleeves, boat neck blouses, and custom festive pattern cutting.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_nila_1", title: "Designer Sleeve Blouse", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400", views: 205, clicks: 82, saves: 30 }
    ],
    services: [
      { id: "srv_nila_1", name: "Designer Blouse", price: 620, duration: "3 days", description: "Custom trendy blouse stitching with lining." },
      { id: "srv_nila_2", name: "Festive Kurti Stitching", price: 780, duration: "3 days", description: "Tailored festive kurti with custom neckline and sleeves." }
    ],
    reviews: [
      { id: "rev_nila_1", customerName: "Preethi D.", rating: 4.7, date: "18 Jun 2026", text: "Very wearable fit and nice boutique-style finish.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:30 AM", "12:30 PM", "03:30 PM"]
  },
  {
    id: "pro_trisha",
    name: "Trisha Glow & Style",
    title: "Occasion Makeup Artist",
    category: "Beautician",
    rating: 4.8,
    reviewsCount: 88,
    location: "Kochi",
    distance: 2.7,
    price: "₹1400",
    priceTier: "Premium",
    availability: "all",
    bio: "Kerala bridal inspired occasion makeup, hair bun styling, jasmine setup, and subtle gold-toned glam.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_trisha_1", title: "Kerala Bridal Inspired Look", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400", views: 276, clicks: 111, saves: 39 }
    ],
    services: [
      { id: "srv_trisha_1", name: "Occasion Makeup", price: 2800, duration: "2 hours", description: "Elegant makeup for wedding guests and functions." },
      { id: "srv_trisha_2", name: "Traditional Hair Bun Styling", price: 1400, duration: "1 hour", description: "Classic bun styling with flowers and accessories." }
    ],
    reviews: [
      { id: "rev_trisha_1", customerName: "Anu P.", rating: 4.8, date: "07 Jun 2026", text: "Looked polished and elegant without feeling overdone.", avatarUrl: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "11:00 AM", "02:00 PM", "05:00 PM"]
  },
  {
    id: "pro_sameera",
    name: "Sameera Stitch Art",
    title: "Custom Embroidery Artist",
    category: "Embroidery",
    rating: 4.6,
    reviewsCount: 47,
    location: "Pune",
    distance: 3.2,
    price: "₹600",
    priceTier: "Budget",
    availability: "all",
    bio: "Personalized embroidery for gifts, names on dupattas, blouse motifs, and small-batch custom decorative work.",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_sameera_1", title: "Name Embroidery Gift Wrap", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400", views: 126, clicks: 44, saves: 12 }
    ],
    services: [
      { id: "srv_sameera_1", name: "Custom Name Embroidery", price: 600, duration: "2 days", description: "Personalized embroidery for fabric gifts and garments." },
      { id: "srv_sameera_2", name: "Blouse Motif Placement", price: 950, duration: "2 days", description: "Small custom motif handwork for blouses." }
    ],
    reviews: [
      { id: "rev_sameera_1", customerName: "Juhi A.", rating: 4.6, date: "25 May 2026", text: "A nice option for small personalized gift orders.", avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:30 AM", "01:30 PM", "04:30 PM"]
  },
  {
    id: "pro_renuka",
    name: "Renuka Home Feast",
    title: "Meal Prep Cook",
    category: "Cooking",
    rating: 4.8,
    reviewsCount: 72,
    location: "Hyderabad",
    distance: 2.3,
    price: "₹360",
    priceTier: "Budget",
    availability: "weekdays",
    bio: "Home meal prep service for working couples, postpartum meals, kids lunch support, and low-spice family menus.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_renuka_1", title: "Family Meal Prep Boxes", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400", views: 216, clicks: 89, saves: 27 }
    ],
    services: [
      { id: "srv_renuka_1", name: "Family Dinner Box", price: 360, duration: "Same day", description: "Comfort-style dinner box for 2-3 people." },
      { id: "srv_renuka_2", name: "Weekly Meal Prep", price: 2100, duration: "6 days", description: "Prepared meals for weekday lunches and dinners." }
    ],
    reviews: [
      { id: "rev_renuka_1", customerName: "Sravya N.", rating: 4.8, date: "11 Jun 2026", text: "Very useful service for busy families and the food is mild and tasty.", avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "12:00 PM", "07:00 PM"]
  },
  {
    id: "pro_chitra",
    name: "Chitra Ladies Tailor",
    title: "Ethnic Wear Tailor",
    category: "Tailoring",
    rating: 4.7,
    reviewsCount: 59,
    location: "Coimbatore",
    distance: 1.8,
    price: "₹500",
    priceTier: "Budget",
    availability: "weekdays",
    bio: "Ethnic wear tailoring for kurtis, salwars, cotton blouses, and comfortable daily wear fits.",
    avatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_chitra_1", title: "Cotton Kurti Set", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=400", views: 133, clicks: 46, saves: 15 }
    ],
    services: [
      { id: "srv_chitra_1", name: "Cotton Blouse Stitching", price: 500, duration: "2 days", description: "Comfortable daily wear blouse fitting." },
      { id: "srv_chitra_2", name: "Salwar Set Stitching", price: 800, duration: "3 days", description: "Simple and neat salwar suit tailoring." }
    ],
    reviews: [
      { id: "rev_chitra_1", customerName: "Bhuvana R.", rating: 4.7, date: "08 May 2026", text: "Very good for regular-use ethnic wear tailoring.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:30 AM", "12:30 PM", "04:00 PM"]
  },
  {
    id: "pro_neha",
    name: "Neha Makeup Stories",
    title: "Freelance Beautician",
    category: "Beautician",
    rating: 4.6,
    reviewsCount: 51,
    location: "Ahmedabad",
    distance: 3.4,
    price: "₹950",
    priceTier: "Standard",
    availability: "weekends",
    bio: "Freelance beautician for soft makeup, draping, light hairstyling and special event home visits.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
    verified: false,
    portfolio: [
      { id: "pf_neha_1", title: "Family Function Makeup", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400", views: 154, clicks: 58, saves: 17 }
    ],
    services: [
      { id: "srv_neha_1", name: "Simple Event Makeup", price: 1900, duration: "1.5 hours", description: "Soft glam for family events and photos." },
      { id: "srv_neha_2", name: "Saree Draping", price: 950, duration: "40 mins", description: "Quick and secure saree draping service." }
    ],
    reviews: [
      { id: "rev_neha_1", customerName: "Krupa B.", rating: 4.6, date: "20 Jun 2026", text: "Good option for home service and simple function styling.", avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:30 AM", "11:30 AM", "02:30 PM", "05:30 PM"]
  },
  {
    id: "pro_hina",
    name: "Hina Luxe Embroidery",
    title: "Luxury Handwork Designer",
    category: "Embroidery",
    rating: 4.9,
    reviewsCount: 109,
    location: "Delhi",
    distance: 2.8,
    price: "₹1250",
    priceTier: "Premium",
    availability: "all",
    bio: "Luxury bridal handwork studio for sequins, pearls, stones, zardosi layers, and couture blouse detailing.",
    avatar: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_hina_1", title: "Pearl Bridal Couture Panel", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 356, clicks: 146, saves: 60 }
    ],
    services: [
      { id: "srv_hina_1", name: "Luxury Bridal Panel Work", price: 1250, duration: "2 days", description: "Premium embellished panel design work." },
      { id: "srv_hina_2", name: "Couture Blouse Work", price: 5600, duration: "7 days", description: "High-detail bridal blouse embroidery." }
    ],
    reviews: [
      { id: "rev_hina_1", customerName: "Mahi G.", rating: 5, date: "03 Jun 2026", text: "The blouse looked couture-level. Exceptional handwork.", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: "pro_vasavi",
    name: "Vasavi Homely Foods",
    title: "Andhra Home Chef",
    category: "Cooking",
    rating: 4.7,
    reviewsCount: 67,
    location: "Vijayawada",
    distance: 2.5,
    price: "₹340",
    priceTier: "Budget",
    availability: "all",
    bio: "Authentic Andhra-style meals, spice-balanced curries, podi combos, and home-packed lunch services.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_vasavi_1", title: "Andhra Meals Combo", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400", views: 178, clicks: 71, saves: 22 }
    ],
    services: [
      { id: "srv_vasavi_1", name: "Andhra Lunch Meal", price: 340, duration: "Same day", description: "Rice, curry, fry, pickle and dal combo." },
      { id: "srv_vasavi_2", name: "Weekly Lunch Plan", price: 1650, duration: "5 days", description: "Home-style weekday Andhra meals." }
    ],
    reviews: [
      { id: "rev_vasavi_1", customerName: "Tejaswi K.", rating: 4.7, date: "14 Jun 2026", text: "Authentic taste and the spice level was just right.", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:30 AM", "12:30 PM", "07:30 PM"]
  },

  {
    id: "pro_madhavi",
    name: "Madhavi Ethnic Studio",
    title: "Festive Wear Tailor",
    category: "Tailoring",
    rating: 4.8,
    reviewsCount: 82,
    location: "Hyderabad",
    distance: 2.0,
    price: "₹720",
    priceTier: "Standard",
    availability: "all",
    bio: "Custom festive tailoring for half sarees, kurti sets, brocade blouses, and family function outfits.",
    avatar: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_madhavi_1", title: "Half Saree Blouse Set", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400", views: 234, clicks: 92, saves: 34 }
    ],
    services: [
      { id: "srv_madhavi_1", name: "Half Saree Blouse Stitching", price: 720, duration: "3 days", description: "Festive blouse stitching for langa voni sets." },
      { id: "srv_madhavi_2", name: "Family Function Outfit Stitching", price: 1450, duration: "4 days", description: "Tailoring support for coordinated family outfits." }
    ],
    reviews: [
      { id: "rev_madhavi_1", customerName: "Bhargavi L.", rating: 4.8, date: "06 Jun 2026", text: "Very neat festive stitching and accurate measurements.", avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"]
  },
  {
    id: "pro_ishita",
    name: "Ishita Bridal Touch",
    title: "Reception Makeup Expert",
    category: "Beautician",
    rating: 4.9,
    reviewsCount: 114,
    location: "Bengaluru",
    distance: 1.9,
    price: "₹1700",
    priceTier: "Premium",
    availability: "all",
    bio: "High-end reception and bridal glam specialist with photo-friendly base, shimmer eye looks, and luxury hair styling.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_ishita_1", title: "Reception Glam Finish", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=400", views: 390, clicks: 158, saves: 63 }
    ],
    services: [
      { id: "srv_ishita_1", name: "Reception Makeup", price: 5200, duration: "3 hours", description: "Premium reception look with hairstyle and draping support." },
      { id: "srv_ishita_2", name: "Luxury Hair Styling", price: 1700, duration: "1 hour", description: "Voluminous curls, bun styling and accessories setup." }
    ],
    reviews: [
      { id: "rev_ishita_1", customerName: "Shruti M.", rating: 5, date: "17 Jun 2026", text: "She delivered a truly premium look and was super professional.", avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["07:00 AM", "10:00 AM", "01:00 PM", "04:00 PM"]
  },
  {
    id: "pro_zoya",
    name: "Zoya Craft Embroidery",
    title: "Pearl Work Specialist",
    category: "Embroidery",
    rating: 4.8,
    reviewsCount: 76,
    location: "Mumbai",
    distance: 3.3,
    price: "₹850",
    priceTier: "Standard",
    availability: "all",
    bio: "Pearl, bead, and sequin work specialist for bridal blouses, veils, sleeves, and Indo-western festive pieces.",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_zoya_1", title: "Pearl Neckline Handwork", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400", views: 220, clicks: 84, saves: 31 }
    ],
    services: [
      { id: "srv_zoya_1", name: "Pearl Neckline Work", price: 850, duration: "2 days", description: "Elegant pearl handwork for neck and sleeve patterns." },
      { id: "srv_zoya_2", name: "Bridal Veil Embellishment", price: 2200, duration: "4 days", description: "Custom pearl and sequin work on bridal veils and dupattas." }
    ],
    reviews: [
      { id: "rev_zoya_1", customerName: "Nazia H.", rating: 4.8, date: "09 Jun 2026", text: "Very graceful work and the pearls were finished neatly.", avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:30 AM", "01:30 PM", "04:30 PM"]
  },
  {
    id: "pro_gowri",
    name: "Gowri Home Plates",
    title: "Regional Home Chef",
    category: "Cooking",
    rating: 4.6,
    reviewsCount: 46,
    location: "Trichy",
    distance: 3.0,
    price: "₹300",
    priceTier: "Budget",
    availability: "weekends",
    bio: "Regional Tamil home cooking for family lunches, weekend specials, mini catering, and comfort food orders.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_gowri_1", title: "Weekend Family Lunch Spread", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400", views: 121, clicks: 45, saves: 13 }
    ],
    services: [
      { id: "srv_gowri_1", name: "Weekend Lunch Box", price: 300, duration: "Same day", description: "Traditional Sunday lunch for 2 people." },
      { id: "srv_gowri_2", name: "Mini Family Catering", price: 3200, duration: "1 day", description: "Regional menu for small gatherings." }
    ],
    reviews: [
      { id: "rev_gowri_1", customerName: "Devi S.", rating: 4.6, date: "23 May 2026", text: "Homely and satisfying food for a weekend family lunch.", avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "12:00 PM", "06:00 PM"]
  },
  {
    id: "pro_janani",
    name: "Janani Designer Tailors",
    title: "Fashion Tailor",
    category: "Tailoring",
    rating: 4.9,
    reviewsCount: 121,
    location: "Chennai",
    distance: 1.1,
    price: "₹850",
    priceTier: "Premium",
    availability: "all",
    bio: "Premium designer tailoring for bridal blouses, lehenga tops, corset blouses, and custom event wear.",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df2?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_janani_1", title: "Corset Style Bridal Blouse", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400", views: 405, clicks: 165, saves: 68 }
    ],
    services: [
      { id: "srv_janani_1", name: "Designer Bridal Blouse", price: 850, duration: "4 days", description: "Premium bridal blouse with designer finishing." },
      { id: "srv_janani_2", name: "Corset Blouse Stitching", price: 1800, duration: "5 days", description: "Structured corset pattern blouse for bridal and reception wear." }
    ],
    reviews: [
      { id: "rev_janani_1", customerName: "Vaidehi P.", rating: 5, date: "19 Jun 2026", text: "One of the best fittings I have received. Premium work.", avatarUrl: "https://images.unsplash.com/photo-1542204625-de293a2f8ff4?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["09:00 AM", "11:30 AM", "02:30 PM", "05:30 PM"]
  },
  {
    id: "pro_shreya",
    name: "Shreya Beauty Desk",
    title: "Freelance Makeup & Draping Artist",
    category: "Beautician",
    rating: 4.7,
    reviewsCount: 65,
    location: "Coimbatore",
    distance: 2.2,
    price: "₹1000",
    priceTier: "Standard",
    availability: "all",
    bio: "Makeup and saree draping specialist for engagement, maternity shoot, birthday, and family occasions.",
    avatar: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_shreya_1", title: "Elegant Saree Guest Look", category: "Beautician", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400", views: 198, clicks: 73, saves: 22 }
    ],
    services: [
      { id: "srv_shreya_1", name: "Makeup + Draping Combo", price: 2600, duration: "2 hours", description: "Perfect for functions and photoshoots." },
      { id: "srv_shreya_2", name: "Saree Draping Only", price: 1000, duration: "45 mins", description: "Pleated, pin-secured and photo-ready draping." }
    ],
    reviews: [
      { id: "rev_shreya_1", customerName: "Ranjani V.", rating: 4.7, date: "10 Jun 2026", text: "Very useful combo service and the draping was excellent.", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:30 AM", "11:30 AM", "02:30 PM", "05:30 PM"]
  },
  {
    id: "pro_afsa",
    name: "Afsa Bridal Handworks",
    title: "Sequins & Aari Specialist",
    category: "Embroidery",
    rating: 4.7,
    reviewsCount: 69,
    location: "Chennai",
    distance: 2.6,
    price: "₹900",
    priceTier: "Standard",
    availability: "weekdays",
    bio: "Hand embroidery artist blending Aari and sequins for bridal and reception blouses with customizable motif placement.",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_afsa_1", title: "Sequins Floral Back Motif", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 242, clicks: 90, saves: 32 }
    ],
    services: [
      { id: "srv_afsa_1", name: "Floral Back Motif Work", price: 900, duration: "2 days", description: "Floral sequins and bead design for blouse backs." },
      { id: "srv_afsa_2", name: "Reception Blouse Work", price: 2600, duration: "4 days", description: "Statement embroidery for party and reception looks." }
    ],
    reviews: [
      { id: "rev_afsa_1", customerName: "Kanishka M.", rating: 4.7, date: "05 Jun 2026", text: "Lovely design sense and clean execution on the blouse back.", avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["10:00 AM", "01:00 PM", "04:00 PM"]
  },
  {
    id: "pro_indira",
    name: "Indira Kitchen Care",
    title: "Homestyle Catering Cook",
    category: "Cooking",
    rating: 4.8,
    reviewsCount: 79,
    location: "Bengaluru",
    distance: 2.9,
    price: "₹420",
    priceTier: "Standard",
    availability: "all",
    bio: "Homestyle catering and meal trays for baby shower, pooja, birthday lunch, and office team meals with vegetarian menus.",
    avatar: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150&h=150",
    verified: true,
    portfolio: [
      { id: "pf_indira_1", title: "Baby Shower Veg Lunch", category: "Cooking", imageUrl: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400", views: 230, clicks: 96, saves: 30 }
    ],
    services: [
      { id: "srv_indira_1", name: "Veg Lunch Tray", price: 420, duration: "Same day", description: "Neat lunch tray for small gatherings." },
      { id: "srv_indira_2", name: "Small Event Catering", price: 4800, duration: "1 day", description: "Vegetarian menu for 15-20 people." }
    ],
    reviews: [
      { id: "rev_indira_1", customerName: "Pavithra J.", rating: 4.8, date: "15 Jun 2026", text: "Very organized and the menu worked well for our house event.", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100" }
    ],
    availableSlots: ["08:00 AM", "11:00 AM", "03:00 PM", "06:00 PM"]
  }
];

window.CUSTOMERS = [
  {
    id: "cust_anjali",
    name: "Anjali Sharma",
    email: "anjali@example.com",
    phone: "+91 98765 00112",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    location: "Mumbai",
    ageRange: "28-34",
    occupation: "Marketing Manager",
    preferredLanguage: "English",
    customerType: "B2C",
    interests: ["Bridal shopping", "Beauty services", "Festive wear"],
    motivations: ["Convenience", "Quality", "Verified professionals"],
    painPoints: ["Last-minute bookings", "Unreliable fitting", "Delayed delivery"],
    buyingPatterns: ["Books on weekends", "Prefers verified profiles", "Compares ratings before booking"],
    interactionHistory: [
      { id: "int_anjali_1", type: "booking", professionalId: "pro_priya", date: "26 May 2026", note: "Booked designer blouse stitching." },
      { id: "int_anjali_2", type: "saved", professionalId: "pro_meena", date: "27 May 2026", note: "Saved for bridal makeup enquiry." }
    ],
    addresses: [
      "Flat 402, Sunshine Apartments, Goregaon West, Mumbai",
      "Office Block C-12, Green Glen Layout, Mumbai"
    ],
    savedCards: [
      "HDFC Credit Card ending in •••• 5678",
      "SBI Debit Card ending in •••• 1234"
    ],
    savedProfessionals: ["pro_priya", "pro_meena", "pro_bhavana", "pro_nazia"]
  },
  {
    id: "cust_divya",
    name: "Divya Krishnan",
    email: "divya.krishnan@example.com",
    phone: "+91 98765 11223",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
    location: "Chennai",
    ageRange: "25-30",
    occupation: "Software Engineer",
    preferredLanguage: "Tamil",
    customerType: "B2C",
    interests: ["Aari work", "Boutique blouses", "Home food"],
    motivations: ["Quality finishing", "Quick communication"],
    painPoints: ["Custom design mismatch", "High prices"],
    buyingPatterns: ["Books after work hours", "Saves profiles before final decision"],
    interactionHistory: [
      { id: "int_divya_1", type: "review", professionalId: "pro_saira", date: "12 May 2026", note: "Left positive review after blouse work." }
    ],
    addresses: [
      "No. 14, Lake View Road, Velachery, Chennai",
      "Tech Park Block 3, OMR, Chennai"
    ],
    savedCards: [
      "ICICI Credit Card ending in •••• 4412"
    ],
    savedProfessionals: ["pro_saira", "pro_rehana", "pro_janani", "pro_indira"]
  },
  {
    id: "cust_sneha",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+91 98765 22334",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100&h=100",
    location: "Hyderabad",
    ageRange: "31-36",
    occupation: "HR Consultant",
    preferredLanguage: "English",
    customerType: "B2C",
    interests: ["Salon at home", "Healthy meals", "Festive outfits"],
    motivations: ["Home service", "Time saving"],
    painPoints: ["Unclear availability", "Travel delay from professionals"],
    buyingPatterns: ["Prefers weekend bookings", "Usually books standard price tier"],
    interactionHistory: [
      { id: "int_sneha_1", type: "booking", professionalId: "pro_rubina", date: "03 Jun 2026", note: "Booked party makeup for family event." },
      { id: "int_sneha_2", type: "saved", professionalId: "pro_renuka", date: "04 Jun 2026", note: "Saved meal prep service." }
    ],
    addresses: [
      "Plot 18, Jubilee Hills, Hyderabad"
    ],
    savedCards: [
      "Axis Debit Card ending in •••• 7731",
      "Amex Card ending in •••• 8890"
    ],
    savedProfessionals: ["pro_rubina", "pro_renuka", "pro_madhavi"]
  },
  {
    id: "cust_kavitha",
    name: "Kavitha Narayanan",
    email: "kavitha.n@example.com",
    phone: "+91 98765 33445",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df2?auto=format&fit=crop&q=80&w=100&h=100",
    location: "Coimbatore",
    ageRange: "38-45",
    occupation: "School Teacher",
    preferredLanguage: "Tamil",
    customerType: "B2C",
    interests: ["Daily tiffin", "Kids tailoring", "Simple makeup"],
    motivations: ["Affordable pricing", "Reliable repeat service"],
    painPoints: ["Limited weekday time", "Need for punctual delivery"],
    buyingPatterns: ["Uses budget services frequently", "Books repeat cooks"],
    interactionHistory: [
      { id: "int_kavitha_1", type: "repeat-order", professionalId: "pro_savithri", date: "08 Jun 2026", note: "Ordered snacks for school function." }
    ],
    addresses: [
      "23, Teachers Colony, RS Puram, Coimbatore"
    ],
    savedCards: [
      "SBI Debit Card ending in •••• 9021"
    ],
    savedProfessionals: ["pro_savithri", "pro_geetha", "pro_shreya"]
  },
  {
    id: "cust_farah",
    name: "Farah Khan",
    email: "farah.khan@example.com",
    phone: "+91 98765 44556",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=100&h=100",
    location: "Delhi",
    ageRange: "26-32",
    occupation: "Fashion Buyer",
    preferredLanguage: "English",
    customerType: "B2C",
    interests: ["Luxury embroidery", "Bridal couture", "Premium makeup"],
    motivations: ["High-end finish", "Design uniqueness", "Verified experts"],
    painPoints: ["Average-quality handwork", "Insufficient portfolio detail"],
    buyingPatterns: ["Chooses premium tier", "Books based on portfolio and reviews"],
    interactionHistory: [
      { id: "int_farah_1", type: "saved", professionalId: "pro_hina", date: "09 Jun 2026", note: "Shortlisted for bridal project." },
      { id: "int_farah_2", type: "saved", professionalId: "pro_ishita", date: "09 Jun 2026", note: "Saved reception makeup service." }
    ],
    addresses: [
      "D-82, Defence Colony, New Delhi"
    ],
    savedCards: [
      "HDFC Regalia ending in •••• 2299"
    ],
    savedProfessionals: ["pro_hina", "pro_ishita", "pro_muskan", "pro_bhavana"]
  }
];

// Helper to seed database if needed
(function () {
  if (typeof localStorage !== 'undefined') {
    if (!localStorage.getItem("riseher_all_professionals")) {
      localStorage.setItem("riseher_all_professionals", JSON.stringify(window.PROFESSIONALS));
    }

    if (!localStorage.getItem("riseher_all_customers")) {
      localStorage.setItem("riseher_all_customers", JSON.stringify(window.CUSTOMERS));
    }
  }
})();