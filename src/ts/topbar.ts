export function openSidebar() {
  const mySidebar = document.getElementById("left-sidebar") as HTMLElement;
  const overlayBg = document.getElementById("sidebar-overlay") as HTMLElement;

  const isOpen = mySidebar.style.display === "block";

  if (isOpen) {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
    document.body.classList.remove("left-sidebar-open");
    localStorage.setItem("sidebarOpen", "false");
  } else {
    mySidebar.style.display = "block";

    if (window.innerWidth < 1181) {
      overlayBg.style.display = "block";
    } else {
      overlayBg.style.display = "none";
    }

    document.body.classList.add("left-sidebar-open");
    localStorage.setItem("sidebarOpen", "true");
  }
}