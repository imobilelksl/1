// Add simple scroll styling
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-main");
  if (window.scrollY > 50) nav.style.background = "#000";
  else nav.style.background = "transparent";
});
// Shrink hero on scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-banner');
  if(window.scrollY > 50){ // scroll 50px පසු
    hero.style.height = '50vh'; // shrink hero
  } else {
    hero.style.height = '100vh'; // full screen again
  }
});
