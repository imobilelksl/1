window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-main");
  const hero = document.querySelector(".hero-banner");

  if (window.scrollY > 50) {
    nav.style.background = "#000";
    hero.style.height = "55vh";
  } else {
    nav.style.background = "transparent";
    hero.style.height = "100vh";
  }
});
