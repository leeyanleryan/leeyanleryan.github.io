export function initUIScript() {
  const theme = localStorage.getItem("theme"); 
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark-mode");
  } else {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
  
  const sidebarOpen = localStorage.getItem("sidebarOpen");
  if (window.innerWidth < 1181) {
    document.documentElement.classList.remove("left-sidebar-open");
    localStorage.setItem("sidebarOpen", "false");
  } else if (sidebarOpen === "true") {
    document.documentElement.classList.add("left-sidebar-open");
  } else if (sidebarOpen === "false") {
    document.documentElement.classList.remove("left-sidebar-open");
  } else {
    document.documentElement.classList.add("left-sidebar-open");
    localStorage.setItem("sidebarOpen", "true");
  }
}