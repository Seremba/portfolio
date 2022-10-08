const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

AOS.init({
  duration: 1500,
});

//   dark mode
const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// moving text
var typed = new Typed(".container", {
  strings: [
    "An Empathetic Communicator",
    "An Opensource Contributor",
    "A Software Developer",
  ],
  stringsElement: null,

  typeSpeed: 90,

  startDelay: 0,

  backSpeed: 0,

  smartBackspace: true,
  shuffle: false,

  backDelay: 700,

  fadeOut: false,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,

  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  attr: null,
  bindInputFocusEvents: false,
  contentType: "html",
});
