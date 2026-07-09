// Auth and Session module for RiseHer
const Auth = {
  // Key names in localStorage
  KEYS: {
    USER_TOKEN: "riseher_token",
    USER_ROLE: "riseher_role",
    USER_PROFILE: "riseher_profile",
    USER_SERVICES: "riseher_services",
    USER_BOOKINGS: "riseher_bookings",
    USER_NOTIFICATIONS: "riseher_notifications",
    USER_EARNINGS: "riseher_earnings",
    USER_REVIEWS: "riseher_reviews",
    USER_PORTFOLIO: "riseher_portfolio"
  },

  // Initialize initial state if empty
  init() {
    // Check if token exists, set dummy one for testing if we just click login
    if (!localStorage.getItem(this.KEYS.USER_PROFILE)) {
      const defaultProfile = {
        userId: "user_priya_123",
        name: "Priya Sharma",
        businessName: "Priya Tailors",
        title: "Tailoring Specialist",
        experience: "5+ Years",
        location: "Mumbai, Maharashtra",
        email: "priya@example.com",
        phone: "+91 98765 43210",
        bio: "Professional tailoring specialist with expertise in bridal wear, blouse stitching, saree pre-pleating, and custom tailoring. Dedicated to delivering high-quality craftsmanship.",
        specializationTags: ["Blouse Stitching", "Saree Stitching", "Embroidery", "Alterations", "Custom Tailoring"],
        completionScore: 80,
        verified: true,
        availableTimings: "Mon - Sat: 9:00 AM - 7:00 PM",
        serviceRadius: "5 km",
        languages: ["Marathi", "Hindi", "English"],
        missingChecklist: ["Identity Documents Pending Verify", "Pricing Presets Needs Review"],
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
      };
      localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(defaultProfile));
    }

    if (!localStorage.getItem(this.KEYS.USER_SERVICES)) {
      const defaultServices = [
        { id: "srv_1", name: "Blouse Stitching", category: "Tailoring", price: 600, duration: "3-5 days", status: "Active", rating: 4.8, reviewsCount: 125, description: "Perfect fit bridal and designer blouse stitching with custom patterns." },
        { id: "srv_2", name: "Aari Embroidery", category: "Embroidery", price: 1200, duration: "5-7 days", status: "Active", rating: 4.9, reviewsCount: 82, description: "Exquisite hand-worked Aari embroidery for bridal blouses and sarees." },
        { id: "srv_3", name: "Mehendi Artist", category: "Beautician", price: 1500, duration: "3-4 hours", status: "Active", rating: 4.7, reviewsCount: 150, description: "Traditional and modern mehendi designs for weddings and festivals." },
        { id: "srv_4", name: "Saree Draping", category: "Beautician", price: 350, duration: "1 hour", status: "Inactive", rating: 4.5, reviewsCount: 45, description: "Professional saree draping service in multiple traditional styles." }
      ];
      localStorage.setItem(this.KEYS.USER_SERVICES, JSON.stringify(defaultServices));
    }

    if (!localStorage.getItem(this.KEYS.USER_BOOKINGS)) {
      const defaultBookings = [
        { id: "RH-28952", customerName: "Meena Kumari", customerPhone: "+91 98765 43210", serviceName: "Bridal Blouse Stitching", price: 2500, date: "28 Jun, 2026", time: "10:00 AM", status: "Confirmed", paymentStatus: "Partial Paid (₹500)", paymentMethod: "UPI - PhonePe", duration: "4 Hours", notes: "Please ensure the gold embroidery matches the sample photo I uploaded.", avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150", previousBookingsCount: 8, location: "Flat 402, Sunshine Apartments, Goregaon West, Mumbai" },
        { id: "RH-28953", customerName: "Anjali Rao", customerPhone: "+91 98234 56789", serviceName: "Aari Embroidery", price: 1200, date: "29 Jun, 2026", time: "02:00 PM", status: "Pending", paymentStatus: "Unpaid", paymentMethod: "Cash", duration: "6 Hours", notes: "Heavy bridal work requested on purple silk.", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150", previousBookingsCount: 3, location: "Block C-12, Green Glen Layout, Mumbai" },
        { id: "RH-28954", customerName: "Kavita Singh", customerPhone: "+91 98111 22233", serviceName: "Mehendi Artistry", price: 1500, date: "20 May, 2026", time: "11:00 AM", status: "Completed", paymentStatus: "Fully Paid", paymentMethod: "UPI - GPay", duration: "3 Hours", notes: "Bridal arabic patterns requested.", avatarUrl: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=150&h=150", previousBookingsCount: 5, location: "G-101, Prestige Enclave, Mumbai" },
        { id: "RH-28955", customerName: "Priya D.", customerPhone: "+91 98321 09876", serviceName: "Saree Draping", price: 350, date: "15 Jun, 2026", time: "09:00 AM", status: "Cancelled", paymentStatus: "Unpaid", paymentMethod: "N/A", duration: "1 Hour", notes: "Need help pre-pleating 2 sarees.", avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0ad2f01?auto=format&fit=crop&q=80&w=150&h=150", previousBookingsCount: 1, location: "Sector 4, Vashi, Navi Mumbai" }
      ];
      localStorage.setItem(this.KEYS.USER_BOOKINGS, JSON.stringify(defaultBookings));
    }

    if (!localStorage.getItem(this.KEYS.USER_NOTIFICATIONS)) {
      const defaultNotifications = [
        { id: "notif_1", type: "booking", title: "New Booking Request", message: "Anjali requested your Aari Embroidery service for 29 Jun", time: "2 hours ago", isRead: false, link: "booking-details.html?id=RH-28953" },
        { id: "notif_2", type: "message", title: "Message from Customer", message: "Meena sent you a message: \"Can you do rush service?\"", time: "1 hour ago", isRead: false, link: "chat-detail.html?id=chat-meena" },
        { id: "notif_3", type: "payment", title: "Payment Received", message: "₹2,500 payment received for Blouse Stitching service (Meena Kumari)", time: "45 minutes ago", isRead: true, link: "earnings.html" },
        { id: "notif_4", type: "system", title: "Profile Featured", message: "Your profile has been featured in top recommendations for Mumbai tailoring", time: "3 hours ago", isRead: false, link: "profile.html" },
        { id: "notif_5", type: "system", title: "New Review", message: "Kavita S. gave you a 5-star review: \"Excellent work! Highly recommend.\"", time: "1 day ago", isRead: true, link: "reviews.html" }
      ];
      localStorage.setItem(this.KEYS.USER_NOTIFICATIONS, JSON.stringify(defaultNotifications));
    }

    if (!localStorage.getItem(this.KEYS.USER_EARNINGS)) {
      const defaultEarnings = {
        availableBalance: 14300,
        pendingBalance: 2500,
        lastPayoutAmount: 8500,
        lastPayoutDate: "20 May 2026",
        bankDetails: {
          bankName: "HDFC Bank Ltd",
          holderName: "Priya Sharma",
          accountNumber: "•••• •••• •••• 1234",
          ifscCode: "HDFC0001234"
        },
        payoutSettings: {
          autoPayout: true,
          frequency: "Weekly",
          minThreshold: 500
        },
        transactionHistory: [
          { date: "20 May 2026", amount: 8500, status: "Completed", type: "Withdrawal", reference: "#RH-58302", bank: "HDFC • 1234" },
          { date: "13 May 2026", amount: 6200, status: "Completed", type: "Withdrawal", reference: "#RH-57211", bank: "HDFC • 1234" },
          { date: "06 May 2026", amount: 4800, status: "Completed", type: "Withdrawal", reference: "#RH-56102", bank: "HDFC • 1234" },
          { date: "29 Apr 2026", amount: 9100, status: "Completed", type: "Withdrawal", reference: "#RH-55091", bank: "HDFC • 1234" },
          { date: "22 Apr 2026", amount: 3400, status: "Failed", type: "Withdrawal", reference: "N/A", bank: "HDFC • 1234" }
        ]
      };
      localStorage.setItem(this.KEYS.USER_EARNINGS, JSON.stringify(defaultEarnings));
    }

    if (!localStorage.getItem(this.KEYS.USER_REVIEWS)) {
      const defaultReviews = [
        { id: "rev_1", customerName: "Neha Sharma", rating: 5, date: "28 May 2026", text: "Amazing work! My bridal blouse was perfectly stitched and finished exactly on time. The embroidery detail was exquisite and matched my lehenga perfectly. Highly recommend Priya for any bridal work!", replies: [], avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100", serviceName: "Blouse Stitching", reportStatus: "Clean" },
        { id: "rev_2", customerName: "Anjali Rao", rating: 5, date: "25 May 2026", text: "Great attention to detail. I asked for some custom modifications on my saree pre-pleating and it came out fantastic. It saved me so much time for the event. Thank you Priya!", replies: [], avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100", serviceName: "Saree Stitching", reportStatus: "Clean" },
        { id: "rev_3", customerName: "Kavita S.", rating: 4, date: "20 May 2026", text: "The stitching quality is top-notch, though there was a slight delay of one day in delivery. Overall very satisfied with the fit and will definitely come back for more.", replies: [{ text: "Thank you Kavita! Appreciate your feedback. Apologies for the slight delay, we're working on improving our timeline management.", date: "21 May 2026" }], avatarUrl: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=100&h=100", serviceName: "Blouse Stitching", reportStatus: "Clean" }
      ];
      localStorage.setItem(this.KEYS.USER_REVIEWS, JSON.stringify(defaultReviews));
    }

    if (!localStorage.getItem(this.KEYS.USER_PORTFOLIO)) {
      const defaultPortfolio = [
        { id: "pf_1", title: "Heavy Zardozi Bridal Blouse", category: "Bridal", imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400", views: 240, clicks: 110, saves: 45 },
        { id: "pf_2", title: "Aari Hand Embroidery Detail", category: "Embroidery", imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400", views: 180, clicks: 80, saves: 32 },
        { id: "pf_3", title: "Pleated Bridal Saree Setup", category: "Tailoring", imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400", views: 120, clicks: 45, saves: 18 },
        { id: "pf_4", title: "Modern Indo-Western Gown Alterations", category: "Crafts", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400", views: 95, clicks: 30, saves: 12 }
      ];
      localStorage.setItem(this.KEYS.USER_PORTFOLIO, JSON.stringify(defaultPortfolio));
    }
  },

  // Log in user
  login(email, role = "professional") {
    const username = email.split("@")[0]; // e.g. "anjali" or "priya"
    localStorage.setItem("riseher_token", "mock_jwt_token_for_" + email);
    localStorage.setItem("riseher_role", role);
    localStorage.setItem("riseher_user", username);
    localStorage.setItem("riseher_logged_in", "true");
    this.init();
  },

  // Log out user
  logout() {
    localStorage.clear();
    window.location.href = "index.html";
  },

  // Check login status
  isLoggedIn() {
    return localStorage.getItem("riseher_logged_in") === "true";
  },

  isAuthenticated() {
    return this.isLoggedIn();
  },

  // Get current user role
  getRole() {
    return localStorage.getItem("riseher_role") || "professional";
  },

  // Get profile state
  getProfile() {
    // Return appropriate profile based on role
    const role = this.getRole();
    if (role === "customer") {
      const customers = window.CUSTOMERS || [];
      const user = localStorage.getItem("riseher_user") || "anjali";
      // Find matching customer or default to first one
      const cust = customers.find(c => c.email.includes(user)) || customers[0] || {
        name: "Anjali Sharma",
        email: "anjali@example.com",
        phone: "+91 98765 00112",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
        addresses: ["Flat 402, Sunshine Apartments, Goregaon West, Mumbai"],
        savedCards: ["HDFC Credit Card ending in •••• 5678"]
      };
      return {
        userId: cust.id || "cust_anjali",
        name: cust.name,
        role: "customer",
        avatarUrl: cust.avatar,
        email: cust.email,
        phone: cust.phone,
        addresses: cust.addresses,
        savedCards: cust.savedCards,
        completionScore: 100
      };
    }
    return JSON.parse(localStorage.getItem(this.KEYS.USER_PROFILE));
  },

  // Save profile state
  saveProfile(profileData) {
    localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(profileData));
  },

  // Guard routing based on authentication and roles
  guardRoute() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Pages that do NOT require authentication
    const publicPages = ["index.html", "onboarding-step1.html", "onboarding-step2.html", "onboarding-step3.html", "onboarding-step4.html", "onboarding-step5.html", ""];

    if (!this.isLoggedIn()) {
      if (!publicPages.includes(currentPage)) {
        window.location.href = "index.html";
      }
      return;
    }

    // Role-based page access restrictions
    if (this.isLoggedIn() && !publicPages.includes(currentPage)) {
      const role = this.getRole();
      
      const proOnlyPages = [
        "dashboard.html",
        "profile.html",
        "edit-profile.html",
        "services.html",
        "service-form.html",
        "upload-work.html",
        "bookings.html",
        "earnings.html",
        "analytics.html",
        "reviews.html"
      ];
      
      const custOnlyPages = [
        "customer-dashboard.html",
        "customer-profile.html",
        "customer-bookings.html",
        "saved-professionals.html",
        "customer-reviews.html",
        "professional-details.html"
      ];
      
      if (role === "customer" && proOnlyPages.includes(currentPage)) {
        window.location.href = "customer-dashboard.html";
      } else if (role === "professional" && custOnlyPages.includes(currentPage)) {
        window.location.href = "dashboard.html";
      }
    }
  }
};

// Auto run auth check on load
Auth.init();
Auth.guardRoute();

// Expose globally
window.Auth = Auth;
