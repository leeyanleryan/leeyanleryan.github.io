type Theme = "light" | "dark";

function applyStoredTheme(): void {
  const theme = (localStorage.getItem("theme") as Theme | null) || "dark";
  const toggleSwitch = document.getElementById("toggle-dark-mode") as HTMLInputElement | null;

  document.body.classList.toggle("dark-mode", theme === "dark");

  if (toggleSwitch) {
    toggleSwitch.checked = theme === "dark";
  }
}

const toggleSwitch = document.getElementById("toggle-dark-mode") as HTMLInputElement | null;

applyStoredTheme();

toggleSwitch?.addEventListener("change", (event: Event) => {
  const target = event.target as HTMLInputElement;
  const theme: Theme = target.checked ? "dark" : "light";

  document.body.classList.toggle("dark-mode", theme === "dark");
  localStorage.setItem("theme", theme);
});