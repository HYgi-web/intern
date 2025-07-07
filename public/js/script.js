let currentRole = "student";
let currentUser = null;

// Dummy user data
const usersData = {
  student: {
    username: "student",
    password: "student123",
    name: "Harsh Yadav",
    roomNo: "12/4",
    hostel: "Type-2 Hostel",
    roommates: ["Shriyansh Sharma", "Rachit Vij"],
  },
  warden: {
    username: "warden",
    password: "warden123",
    name: "Dr. ABC",
  },
  authority: {
    username: "authority",
    password: "authority123",
    name: "Dr. Sanjay",
  },
};

// Role selection
document.querySelectorAll(".role-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".role-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    currentRole = this.dataset.role;
  });
});

// Login submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    usersData[currentRole] &&
    usersData[currentRole].username === username &&
    usersData[currentRole].password === password
  ) {
    currentUser = usersData[currentRole];
    showDashboard(currentRole);
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

function showDashboard(role) {
  document.getElementById("loginPage").style.display = "none";

  // Hide all dashboards
  document
    .querySelectorAll(".dashboard")
    .forEach((d) => d.classList.remove("active"));

  // Show relevant dashboard
  const dashboard = document.getElementById(role + "Dashboard");
  if (dashboard) dashboard.classList.add("active");

  // Populate student profile data
  if (role === "student" && currentUser) {
    document.getElementById("studentName").textContent = currentUser.name;
    document.getElementById("roomNo").textContent = currentUser.roomNo || "";
    document.getElementById("hostelName").textContent =
      currentUser.hostel || "";
    document.getElementById("roommates").textContent = (
      currentUser.roommates || []
    ).join(", ");
  }

  // Warden info
  if (role === "warden" && currentUser) {
    const nameEl = document.getElementById("wardenName");
    if (nameEl) nameEl.textContent = currentUser.name;

    const hostelEl = document.getElementById("wardenHostel");
    if (hostelEl) hostelEl.textContent = "VLB Hostel"; // Hardcoded or replace dynamically
  }

  if (role === "student") setTimeout(addPaymentButtons, 100);
  if (role === "warden") setTimeout(addRoomManagementFeatures, 100);
}

function logout() {
  currentUser = null;
  document
    .querySelectorAll(".dashboard")
    .forEach((d) => d.classList.remove("active"));
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("loginForm").reset();
}

// Payment button for students
function addPaymentButtons() {
  if (currentRole === "student") {
    const feeItems = document.querySelectorAll(".fee-item");
    feeItems.forEach((item) => {
      if (!item.querySelector(".pay-btn")) {
        const payBtn = document.createElement("button");
        payBtn.textContent = "Pay Now";
        payBtn.className = "pay-btn";
        payBtn.style.cssText =
          "margin-top: 10px; padding: 8px 16px; background: #4caf50; color: white; border: none; border-radius: 5px; cursor: pointer;";
        payBtn.onclick = () =>
          payFee(item.querySelector("div:nth-child(2)").textContent);
        item.appendChild(payBtn);
      }
    });
  }
}

function payFee(feeType) {
  const confirmed = confirm(`Proceed to pay ${feeType}?`);
  if (confirmed) {
    showNotification(`${feeType} payment successful!`, "success");
    setTimeout(() => location.reload(), 1500);
  }
}

// Room management button for wardens
function addRoomManagementFeatures() {
  if (currentRole === "warden") {
    const roomItems = document.querySelectorAll(".room-item");
    roomItems.forEach((item) => {
      if (!item.querySelector(".manage-btn")) {
        const manageBtn = document.createElement("button");
        manageBtn.textContent = "Manage";
        manageBtn.className = "manage-btn";
        manageBtn.style.cssText =
          "margin-left: 10px; padding: 4px 8px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;";
        const roomText = item.querySelector("div").textContent;
        const roomNumber = roomText.match(/Room (\d+)/)[1];
        manageBtn.onclick = () => scheduleMaintenanceForRoom(roomNumber);
        item.querySelector("div").appendChild(manageBtn);
      }
    });
  }
}

// Notifications
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${
      type === "success"
        ? "#4caf50"
        : type === "error"
        ? "#f44336"
        : "#2196f3"
    };
    color: white;
    border-radius: 5px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Notification animation
const style = document.createElement("style");
style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(style);

// Auto-refresh dashboard data log
setInterval(() => {
  if (currentUser) console.log("Auto-refreshing dashboard data...");
}, 30000);

// Demo credentials note
document.addEventListener("DOMContentLoaded", function () {
  const loginContainer = document.querySelector(".login-container");
  const demoInfo = document.createElement("div");
  demoInfo.style.cssText =
    "margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px; font-size: 0.9rem; color: #666;";
  demoInfo.innerHTML = `
    <strong>Demo Credentials:</strong><br>
    Student: student / student123<br>
    Warden: warden / warden123<br>
    Authority: authority / authority123
  `;
  loginContainer.appendChild(demoInfo);
});

// Dummy function for room maintenance (you can customize this)
function scheduleMaintenanceForRoom(roomNumber) {
  alert(`Maintenance scheduled for Room ${roomNumber}`);
}
