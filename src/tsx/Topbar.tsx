import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { openSidebar } from "../ts/topbar";
import { SEARCH_DATA, rankSearchItem } from "../ts/searchData";

type Theme = "light" | "dark";

export default function Topbar() {
  const router = useRouter();
  const searchRef = useRef<HTMLFormElement | null>(null);

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    function applyStoredTheme(): void {
      const theme = (localStorage.getItem("theme") as Theme | null) || "dark";
      const toggleSwitch = document.getElementById("toggle-dark-mode") as HTMLInputElement | null;

      document.body.classList.toggle("dark-mode", theme === "dark");

      if (toggleSwitch) {
        toggleSwitch.checked = theme === "dark";
      }
    }

    function applyStoredSidebarState(): void {
      const sidebarOpen = localStorage.getItem("sidebarOpen") === "true";
      const mySidebar = document.getElementById("left-sidebar") as HTMLElement | null;
      const overlayBg = document.getElementById("sidebar-overlay") as HTMLElement | null;

      if (!mySidebar || !overlayBg) return;

      if (window.innerWidth < 1181) {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
        document.body.classList.remove("left-sidebar-open");
        localStorage.setItem("sidebarOpen", "false");
        return;
      }

      if (sidebarOpen) {
        mySidebar.style.display = "block";
        overlayBg.style.display = "none";
        document.body.classList.add("left-sidebar-open");
      } else {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
        document.body.classList.remove("left-sidebar-open");
      }
    }

    const toggleSwitch = document.getElementById("toggle-dark-mode") as HTMLInputElement | null;

    applyStoredTheme();
    applyStoredSidebarState();

    const handleThemeChange = (event: Event): void => {
      const target = event.target as HTMLInputElement;
      const theme: Theme = target.checked ? "dark" : "light";

      document.body.classList.toggle("dark-mode", theme === "dark");
      localStorage.setItem("theme", theme);
    };

    const handleDocumentClick = (event: MouseEvent): void => {
      const target = event.target as Node | null;

      if (searchRef.current && target && !searchRef.current.contains(target)) {
        setShowResults(false);
        setSelectedIndex(-1);
      }
    };

    toggleSwitch?.addEventListener("change", handleThemeChange);
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      toggleSwitch?.removeEventListener("change", handleThemeChange);
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const filteredResults = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    return SEARCH_DATA
      .map((item) => ({
        item,
        score: rankSearchItem(item, trimmed),
      }))
      .filter((entry) => entry.score >= 0)
      .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label))
      .slice(0, 6)
      .map((entry) => entry.item);
  }, [query]);

  function goToResult(index: number): void {
    if (index < 0 || index >= filteredResults.length) return;
    const result = filteredResults[index];
    setShowResults(false);
    setSelectedIndex(-1);
    router.push(result.url);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(e.target.value);
    setSelectedIndex(-1);
    setShowResults(true);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (!showResults && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      if (filteredResults.length > 0) {
        e.preventDefault();
        setShowResults(true);
        setSelectedIndex(e.key === "ArrowDown" ? 0 : filteredResults.length - 1);
      }
      return;
    }

    if (filteredResults.length === 0) {
      if (e.key === "Escape") {
        setShowResults(false);
        setSelectedIndex(-1);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (selectedIndex === -1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex((selectedIndex + 1) % filteredResults.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();

      if (selectedIndex === -1) {
        setSelectedIndex(filteredResults.length - 1);
      } else {
        setSelectedIndex((selectedIndex - 1 + filteredResults.length) % filteredResults.length);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();

      if (selectedIndex >= 0) {
        goToResult(selectedIndex);
      } else if (filteredResults.length > 0) {
        goToResult(0);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setShowResults(false);
      setSelectedIndex(-1);
    }
  }

  function handleInputFocus(): void {
    if (query.trim()) {
      setShowResults(true);
    }
  }

  return (
    <>
      <div id="topbar" className="w3-bar w3-top w3-black w3-large">
        <button
          className="w3-bar-item w3-button w3-hover-none w3-hover-text-grey no-double-tap-zoom"
          onClick={() => openSidebar()}
          type="button"
        >
          <i className="fa fa-bars"></i>{"\u00A0\u00A0Menu"}
        </button>

        <form
          id="topbar-search"
          ref={searchRef}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="search-input"
            type="text"
            placeholder="Search…"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            autoComplete="off"
          />

          {showResults && (
            <ul id="search-results">
              {filteredResults.length === 0 ? (
                query.trim() ? (
                  <li>
                    <span className="search-no-results">No results found</span>
                  </li>
                ) : null
              ) : (
                filteredResults.map((result, index) => (
                  <li key={result.url}>
                    <Link
                      href={result.url}
                      className={selectedIndex === index ? "search-result-active" : ""}
                      onClick={() => {
                        setShowResults(false);
                        setSelectedIndex(-1);
                      }}
                    >
                      {result.label}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </form>

        <span className="w3-bar-item w3-right">
          <i className="fa fa-moon-o moon-icon"></i>{"\u00A0"}
          <label className="switch">
            <input id="toggle-dark-mode" type="checkbox" title="Toggle theme" />
            <span className="slider"></span>
          </label>
        </span>
      </div>
    </>
  );
}