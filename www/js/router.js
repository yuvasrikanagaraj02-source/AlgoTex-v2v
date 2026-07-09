// router.js - Client-side router assistance for RiseHer
const Router = {
  navigateToDashboard() {
    const role = localStorage.getItem("riseher_role") || "professional";
    if (role === "customer") {
      window.location.href = "customer-dashboard.html";
    } else {
      window.location.href = "dashboard.html";
    }
  },
  
  navigateToProfile() {
    const role = localStorage.getItem("riseher_role") || "professional";
    if (role === "customer") {
      window.location.href = "customer-profile.html";
    } else {
      window.location.href = "profile.html";
    }
  },
  
  navigateToBookings() {
    const role = localStorage.getItem("riseher_role") || "professional";
    if (role === "customer") {
      window.location.href = "customer-bookings.html";
    } else {
      window.location.href = "bookings.html";
    }
  }
};

window.Router = Router;
