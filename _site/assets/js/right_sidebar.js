// random page
document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    '/about/profile',
    '/about/projects/',
    '/about/experiences/',
    '/about/awards/',
    '/about/hobbies/',
    '/resources/python/',
    '/resources/machine-learning/',
    '/resources/lyrics-translations/',
    '/pets/ares/',
    '/pets/pome/'
  ];

  const btn = document.getElementById('random-page-button');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const choice = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = choice;
  });
});
