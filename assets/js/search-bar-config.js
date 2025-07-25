SimpleJekyllSearch({
  searchInput:    document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json:           '/search.json',            // our step-1 index
  searchResultTemplate: '<li><a href="{url}">{section}: {title}</a></li>',
  noResultsText:  '&nbsp;No results found',
  limit:          5,                         // show up to 5 matches
  fuzzy:          false,                     // turn on if you want typosuggestions

  sortMiddleware: (a, b) => {
    const q = (a.query || '').toLowerCase();

    // 1) Title‐matches first
    const aInTitle = a.title.toLowerCase().includes(q) ? 1 : 0;
    const bInTitle = b.title.toLowerCase().includes(q) ? 1 : 0;
    if (aInTitle !== bInTitle) return bInTitle - aInTitle;

    // 2) URL‐matches next
    const aInUrl = a.url.toLowerCase().includes(q) ? 1 : 0;
    const bInUrl = b.url.toLowerCase().includes(q) ? 1 : 0;
    if (aInUrl !== bInUrl) return bInUrl - aInUrl;

    // 3) leave everything else in original order
    return 0;
  }
});

// Grab references
const input   = document.getElementById('search-input');
const results = document.getElementById('search-results');

// On Enter, go to the top result
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();                  // stop any default form‐submit
    const firstLink = results.querySelector('li a');
    if (firstLink) {
      // Option A: simulate a click
      firstLink.click();                 

      // Option B: or just change location
      // window.location.href = firstLink.href;
    }
  }
});

document.addEventListener('click', function(e) {
  const form    = document.getElementById('topbar-search');
  const results = document.getElementById('search-results');

  // if click is *not* inside the form or the results box
  if (!form.contains(e.target) && !results.contains(e.target)) {
    results.innerHTML = '';   // clear out the list
  }
});