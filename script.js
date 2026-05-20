let hiddenCards = document.querySelectorAll(".hidden");
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  },
);

hiddenCards.forEach((card) => {
  observer.observe(card);
});

window.addEventListener("scroll", () => {
  document.querySelector(".hidden-hero-content").classList.add("show");
});

let menuCloseButton = document.getElementById("menuCloseButton");

let menuOpenButton = document.getElementById("menuOpenButton");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.toggle("show-menu");
});

// Scroll spy

let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-link");

let scrollSpyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });

        const id = entry.target.getAttribute("id");

        const activeLink = document.querySelector(
          `.nav-link[href = "#${id}"] `,
        );

        activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "-20px 0px 0px 0px ",
  },
);

sections.forEach((section) => {
  scrollSpyObserver.observe(section);
});
