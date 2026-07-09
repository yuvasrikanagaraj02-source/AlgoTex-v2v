// role.js - Role management helpers for RiseHer
const Role = {
  getRole() {
    return localStorage.getItem("riseher_role") || "professional";
  },
  
  setRole(role) {
    localStorage.setItem("riseher_role", role);
  },
  
  isCustomer() {
    return this.getRole() === "customer";
  },
  
  isProfessional() {
    return this.getRole() === "professional";
  }
};

window.Role = Role;
