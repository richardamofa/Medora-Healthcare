const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
} else {
    navbar.classList.remove("scrolled");
}
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));