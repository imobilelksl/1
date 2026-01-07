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
/* Disable right click */
document.addEventListener("contextmenu", e => e.preventDefault());

/* Disable text select */
document.addEventListener("selectstart", e => e.preventDefault());

/* Disable copy / cut / paste */
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("paste", e => e.preventDefault());

/* Disable inspect shortcuts */
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});
