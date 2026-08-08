const VISITOR_API =
  "https://leeyanleryan-github-io-counter.leeyanleryan.workers.dev/";

const visitCountElement =
  document.getElementById("visit-count");

async function loadVisitCount() {
  if (!visitCountElement) {
    return;
  }

  try {
    /*
     * sessionStorage prevents every refresh in the same browser tab
     * from being counted as another visit.
     */
    const alreadyCounted =
      sessionStorage.getItem("osu-visit-counted") === "true";

    const endpoint = alreadyCounted
      ? "/count"
      : "/visit";

    const method = alreadyCounted
      ? "GET"
      : "POST";

    const response = await fetch(
      `${VISITOR_API}${endpoint}`,
      { method }
    );

    if (!response.ok) {
      throw new Error(
        `Visitor API returned ${response.status}`
      );
    }

    const data = await response.json();

    visitCountElement.textContent =
      data.count.toLocaleString();

    if (!alreadyCounted) {
      sessionStorage.setItem(
        "osu-visit-counted",
        "true"
      );
    }
  } catch (error) {
    console.error(
      "Unable to load visitor count:",
      error
    );

    visitCountElement.textContent = "Unavailable";
  }
}

loadVisitCount();