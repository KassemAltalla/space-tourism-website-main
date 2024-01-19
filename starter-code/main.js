const sidebarToggle = document.getElementById("sidebar-toggle");
const closeSidebar = document.getElementById("close-sidebar");
const side = document.querySelector(".side");

sidebarToggle.addEventListener("click", function () {
    side.classList.add("open");
});

closeSidebar.addEventListener("click", function () {
    side.classList.remove("open");
});