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
    setTimeout(() => el.classList.remove('touch-active'), 200);
  });
  stanza.addEventListener('touchend', () => {
    stanza.classList.remove('touch-active');
  });
});