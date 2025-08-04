document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lyrics-stanza').forEach(stanza => {
    stanza.style.cursor = 'pointer';
    stanza.addEventListener('click', () => {
    const id = stanza.getAttribute('data-idx');
    const box = document.getElementById(`exp-${id}`);
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
    });
  });
});

document.querySelectorAll('.no-hover-background-after-click').forEach(stanza => {
  stanza.addEventListener('touchstart', () => {
    stanza.classList.add('touch-active');
    setTimeout(() => stanza.classList.remove('touch-active'), 200);
  });
});

(function() {
  // 1) load saved settings or default→true
  const settings = {
    kanji:   JSON.parse(localStorage.getItem('showKanji')   ?? 'true'),
    romaji:  JSON.parse(localStorage.getItem('showRomaji')  ?? 'true'),
    english: JSON.parse(localStorage.getItem('showEnglish') ?? 'true')
  };

  // 2) update visibility & button text
  function update() {
    document.querySelectorAll('.kanji-text')
            .forEach(el => el.style.display = settings.kanji ? '' : 'none');
    document.querySelectorAll('.romaji-text')
            .forEach(el => el.style.display = settings.romaji ? '' : 'none');
    document.querySelectorAll('.english-text')
            .forEach(el => el.style.display = settings.english ? '' : 'none');

    document.getElementById('toggle-kanji').textContent   = settings.kanji   ? 'Hide Kanji'   : 'Show Kanji';
    document.getElementById('toggle-romaji').textContent  = settings.romaji  ? 'Hide Romaji'  : 'Show Romaji';
    document.getElementById('toggle-english').textContent = settings.english ? 'Hide English' : 'Show English';
  }

  // 3) wire up buttons
  document.getElementById('toggle-kanji')
          .addEventListener('click', () => {
    settings.kanji = !settings.kanji;
    localStorage.setItem('showKanji', settings.kanji);
    update();
  });
  document.getElementById('toggle-romaji')
          .addEventListener('click', () => {
    settings.romaji = !settings.romaji;
    localStorage.setItem('showRomaji', settings.romaji);
    update();
  });
  document.getElementById('toggle-english')
          .addEventListener('click', () => {
    settings.english = !settings.english;
    localStorage.setItem('showEnglish', settings.english);
    update();
  });

  // 4) initial paint
  update();
})();