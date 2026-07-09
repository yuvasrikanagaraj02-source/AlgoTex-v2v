const CONFIG = {
  API_BASE_URL: "http://localhost:5000/api",
  APP_NAME: "RiseHer",
  VERSION: "1.0",
  DEFAULT_ROLE: "professional",
  CLOUDINARY: {
    CLOUD_NAME: "riseher",
    FOLDERS: {
      PROFILE: "riseher/profile",
      PORTFOLIO: "riseher/portfolio",
      SERVICES: "riseher/services",
      REVIEWS: "riseher/reviews",
      ATTACHMENTS: "riseher/attachments",
      VERIFICATION: "riseher/verification"
    }
  }
};

// Expose globally
window.CONFIG = CONFIG;

window.USER_ROLES = {
  PROFESSIONAL: "professional",
  CUSTOMER: "customer",
  ADMIN: "admin"
};
