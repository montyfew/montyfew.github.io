// Look for any hidden objects and smoothly make them visible by removing their hidden class
const toReveal = [...document.querySelectorAll(".smooth-reveal")];

toReveal.map((h) => {
  setTimeout(function () {
    h.classList.remove("hidden");
  }, 10);
});

// The animation doesn't work so well on older phones so just
// disable it for anything that seems like it might be a phone
if (window.innerWidth > 620) {
  const body = document.querySelector("body");
  const home = document.querySelector("header nav a.exit");
  home.onclick = (e) => {
    const a = e.srcElement;
    e.preventDefault();
    if (window.location.pathname !== "/") {
      body.classList.add("smooth-reveal");
      body.classList.add("hidden");
      setTimeout(function () {
        window.location.href = a.href;
      }, 1000);
    }
  };
}
