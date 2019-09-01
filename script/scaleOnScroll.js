// Image scale on scroll
window.addEventListener("load", () => {
  let header_image = ($ = document.getElementById("header-image"));
  let docHeight = document.documentElement.offsetHeight;

  window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    transformValue = `scale(${(100 - scrolled.toFixed(1) / 10) / 100})`;

    header_image.style.transform = transformValue;
  });
});

// AOS initialization
AOS.init();
