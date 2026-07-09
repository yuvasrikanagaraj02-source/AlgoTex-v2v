// Layout manager to dynamically load and configure shared UI shell components
document.addEventListener("DOMContentLoaded", () => {
  // Load sidebar if container is present
  const sidebarContainer = document.getElementById("layout-sidebar");
  if (sidebarContainer) {
    fetch("components/sidebar.html")
      .then(res => {
        if (!res.ok) throw new Error("Sidebar fetch failed");
        return res.text();
      })
      .then(html => {
        sidebarContainer.innerHTML = html;
        filterElementsByRole(sidebarContainer);
        highlightActiveMenu();
        syncProfileDetails();
      })
      .catch(err => {
        console.error("Error loading sidebar:", err);
        showCorsWarning();
      });
  }

  // Load header if container is present
  const headerContainer = document.getElementById("layout-header");
  if (headerContainer) {
    fetch("components/header.html")
      .then(res => {
        if (!res.ok) throw new Error("Header fetch failed");
        return res.text();
      })
      .then(html => {
        headerContainer.innerHTML = html;
        syncProfileDetails();
        initNotificationsDropdown();
      })
      .catch(err => {
        console.error("Error loading header:", err);
        showCorsWarning();
      });
  }

  // Load mobile navigation bar if container is present
  const mobileNavContainer = document.getElementById("layout-mobile-nav");
  if (mobileNavContainer) {
    fetch("components/mobile-nav.html")
      .then(res => {
        if (!res.ok) throw new Error("Mobile nav fetch failed");
        return res.text();
      })
      .then(html => {
        mobileNavContainer.innerHTML = html;
        filterElementsByRole(mobileNavContainer);
        highlightActiveMenu();
      })
      .catch(err => {
        console.error("Error loading mobile nav:", err);
        showCorsWarning();
      });
  }
});

// Helper to filter items by role
function filterElementsByRole(container) {
  if (typeof Auth === "undefined") return;
  const role = Auth.getRole();
  const elements = container.querySelectorAll("[data-role]");
  elements.forEach(el => {
    const elRole = el.getAttribute("data-role");
    if (elRole !== "shared" && elRole !== role) {
      el.remove();
    }
  });
}

// Highlight active links based on current path
function highlightActiveMenu() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  let pageName = currentPath.replace(".html", "");

  // Normalize sub-pages to parent menu items
  if (pageName === "edit-profile") pageName = "settings";
  if (pageName === "service-form") pageName = "services";
  if (pageName === "booking-details") pageName = "bookings";
  if (pageName === "chat-detail") pageName = "messages";
  if (pageName === "customer-bookings") pageName = "customer-bookings";
  if (pageName === "customer-profile") pageName = "customer-profile";
  if (pageName === "customer-dashboard") pageName = "customer-dashboard";
  if (pageName === "upload-work") pageName = "portfolio";
  if (pageName === "saved-professionals") pageName = "saved";

  // Sidebar highlights (Desktop)
  const sidebarLink = document.getElementById(`sidebar-${pageName}`);
  if (sidebarLink) {
    sidebarLink.classList.add("sidebar-active");
    sidebarLink.classList.remove("text-slate-500", "hover:text-[#E91E63]", "hover:bg-pink-50");
  }

  // Mobile Bottom Nav highlights
  const mobileLink = document.getElementById(`mobile-nav-${pageName}`);
  if (mobileLink) {
    mobileLink.classList.add("text-[#E91E63]");
    mobileLink.classList.remove("text-slate-400");
  }
}

// Sync global profile states to sidebar and header fields
function syncProfileDetails() {
  if (typeof Auth === "undefined") return;
  const profile = Auth.getProfile();
  if (!profile) return;

  // Set avatar pictures
  const headerAvatar = document.getElementById("header-user-avatar");
  if (headerAvatar) {
    headerAvatar.src = profile.avatarUrl;
    const parentLink = headerAvatar.closest("a");
    if (parentLink) {
      parentLink.href = profile.role === "customer" ? "customer-profile.html" : "profile.html";
    }
  }

  // Set header role badge
  const headerRoleText = document.getElementById("header-role-text");
  const headerRoleIcon = document.getElementById("header-role-icon");
  if (headerRoleText) {
    const roleName = profile.role === "admin" ? "Admin" : (profile.role === "customer" ? "Customer" : "Professional");
    headerRoleText.textContent = roleName;
    if (headerRoleIcon) {
      headerRoleIcon.setAttribute("icon", profile.role === "customer" ? "lucide:user" : "lucide:briefcase");
    }
    const badge = document.getElementById("header-role-badge");
    if (badge) {
      if (profile.role === "customer") {
        badge.className = "hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-[10px] font-bold uppercase tracking-wider text-indigo-600";
      } else {
        badge.className = "hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 border border-pink-100 rounded-xl text-[10px] font-bold uppercase tracking-wider text-[#E91E63]";
      }
    }
  }

  const sidebarAvatar = document.getElementById("sidebar-user-avatar");
  if (sidebarAvatar) sidebarAvatar.src = profile.avatarUrl;

  // Set usernames & titles
  const sidebarName = document.getElementById("sidebar-user-name");
  if (sidebarName) sidebarName.textContent = profile.name;

  const sidebarRole = document.getElementById("sidebar-user-role");
  if (sidebarRole) {
    sidebarRole.textContent = profile.role === "admin" ? "Admin" : (profile.role === "customer" ? "Customer" : "Professional");
  }

  // Dynamic Page updates for profile completions
  const completionWidgetText = document.getElementById("layout-completion-percentage");
  if (completionWidgetText) completionWidgetText.textContent = `${profile.completionScore}%`;

  const completionWidgetBar = document.getElementById("layout-completion-bar");
  if (completionWidgetBar) completionWidgetBar.style.width = `${profile.completionScore}%`;
}

// Setup notifications bell interactivity
function initNotificationsDropdown() {
  const btn = document.getElementById("header-notif-btn");
  const dropdown = document.getElementById("header-notif-dropdown");
  if (!btn || !dropdown) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    dropdown.classList.add("hidden");
  });

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  renderNotificationsDropdown();
}

// Render dynamic list of alerts inside dropdown
function renderNotificationsDropdown() {
  const listContainer = document.getElementById("header-notif-list");
  const badge = document.getElementById("header-notif-badge");
  if (!listContainer) return;

  const notifs = JSON.parse(localStorage.getItem("riseher_notifications")) || [];
  const unreadCount = notifs.filter(n => !n.isRead).length;

  // Update badge dot
  if (badge) {
    if (unreadCount > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }

  if (notifs.length === 0) {
    listContainer.innerHTML = `
      <div class="px-6 py-8 text-center text-xs text-slate-400 font-medium">
        <iconify-icon icon="lucide:bell-off" class="text-3xl text-slate-200 mb-2 block mx-auto"></iconify-icon>
        No notifications yet
      </div>
    `;
    return;
  }

  // Render top 4 notifications
  listContainer.innerHTML = notifs.slice(0, 4).map(notif => {
    const isUnread = !notif.isRead;
    const iconMap = {
      booking: "lucide:calendar-plus",
      message: "lucide:message-square",
      payment: "lucide:check-circle",
      system: "lucide:award",
      promotion: "lucide:sparkles"
    };
    const colorMap = {
      booking: "text-[#E91E63] bg-pink-50",
      message: "text-indigo-500 bg-indigo-50",
      payment: "text-green-500 bg-green-50",
      system: "text-yellow-600 bg-yellow-50",
      promotion: "text-purple-600 bg-purple-50"
    };

    const icon = iconMap[notif.type] || "lucide:bell";
    const bgClass = colorMap[notif.type] || "text-slate-500 bg-slate-50";

    return `
      <a href="${notif.link}" onclick="layoutReadNotification('${notif.id}')" class="flex items-start gap-4 p-4 hover:bg-slate-50 transition-all ${isUnread ? 'bg-blue-50/20' : ''}">
        <div class="w-9 h-9 ${bgClass} rounded-xl flex items-center justify-center shrink-0">
          <iconify-icon icon="${icon}" class="text-lg"></iconify-icon>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-slate-900 ${isUnread ? 'font-extrabold' : ''}">${notif.title}</p>
          <p class="text-[11px] text-slate-500 truncate mt-0.5">${notif.message}</p>
          <span class="text-[9px] text-slate-400 mt-1 block">${notif.time}</span>
        </div>
        ${isUnread ? '<span class="w-2 h-2 bg-blue-500 rounded-full shrink-0 mt-2"></span>' : ''}
      </a>
    `;
  }).join("");
}

// Mark a single notification read when clicked
function layoutReadNotification(notifId) {
  const notifs = JSON.parse(localStorage.getItem("riseher_notifications")) || [];
  const updated = notifs.map(n => n.id === notifId ? { ...n, isRead: true } : n);
  localStorage.setItem("riseher_notifications", JSON.stringify(updated));
  renderNotificationsDropdown();
}

// Mark all read in drop down
function layoutMarkAllNotificationsRead() {
  const notifs = JSON.parse(localStorage.getItem("riseher_notifications")) || [];
  const updated = notifs.map(n => ({ ...n, isRead: true }));
  localStorage.setItem("riseher_notifications", JSON.stringify(updated));
  renderNotificationsDropdown();
  
  // Also refresh current page notifications if notifications.html is open
  if (typeof renderNotificationsPage === "function") {
    renderNotificationsPage();
  }
}

// Mobile Bottom Nav Add Modal controls
function layoutOpenAddModal() {
  const modal = document.getElementById("mobile-add-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function layoutCloseAddModal() {
  const modal = document.getElementById("mobile-add-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Global Reusable Professional Card Renderer
window.renderProfessionalCard = function(pro) {
  const verifiedBadge = pro.verified 
    ? '<iconify-icon icon="lucide:shield-check" class="text-green-500 text-base shrink-0" title="Verified Provider"></iconify-icon>' 
    : '';
  return `
    <div class="bg-white rounded-3xl p-6 border border-slate-50 custom-shadow flex flex-col justify-between space-y-4 hover:scale-[1.01] transition-all card-hover group">
      <div class="flex gap-4">
        <img src="${pro.avatar}" class="w-14 h-14 rounded-2xl object-cover shrink-0 ring-2 ring-pink-50" alt="${pro.name}">
        <div class="min-w-0 space-y-0.5">
          <div class="flex items-center gap-1.5">
            <h4 class="font-extrabold text-slate-900 text-sm truncate">${pro.name}</h4>
            ${verifiedBadge}
          </div>
          <p class="text-xs font-bold text-pink-600 truncate">${pro.title}</p>
          <div class="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
            <iconify-icon icon="lucide:map-pin"></iconify-icon>
            <span>${pro.location}</span>
          </div>
        </div>
      </div>

      <div class="border-t border-b border-slate-50 py-3 flex items-center justify-between font-semibold text-xs text-slate-600 font-bold">
        <div class="flex items-center gap-0.5 text-yellow-500">
          <iconify-icon icon="lucide:star" class="text-sm"></iconify-icon>
          <span>${pro.rating.toFixed(1)}</span>
          <span class="text-slate-300 font-normal">(${pro.reviewsCount} reviews)</span>
        </div>
        <div>
          <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-none">Starting Rates</span>
          <p class="text-slate-800 font-extrabold mt-0.5">${pro.price}</p>
        </div>
      </div>

      <a href="professional-details.html?id=${pro.id}" class="h-10 w-full bg-[#E91E63] text-white font-bold rounded-xl text-xs flex items-center justify-center hover:bg-[#D81B60] transition-colors shadow shadow-pink-100">
        View Profile
      </a>
    </div>
  `;
};

// Help notify users double-clicking html files directly (CORS restriction warning)
function showCorsWarning() {
  if (window.location.protocol === "file:" && !document.getElementById("cors-warning-banner")) {
    const banner = document.createElement("div");
    banner.id = "cors-warning-banner";
    banner.className = "fixed top-0 left-0 right-0 bg-red-500 text-white font-bold text-xs py-3.5 px-6 text-center z-[9999] shadow-lg flex items-center justify-center gap-3";
    banner.innerHTML = `
      <iconify-icon icon="lucide:shield-alert" class="text-base shrink-0 animate-bounce"></iconify-icon>
      <span>Browser security blocks layout loading when double-clicking HTML files directly. Please view this page via the local server: <a href="http://localhost:8000" class="underline hover:text-pink-100 font-extrabold ml-1">http://localhost:8000</a></span>
      <button onclick="this.parentElement.remove()" class="w-5 h-5 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center font-black ml-3">&times;</button>
    `;
    document.body.prepend(banner);
  }
}
