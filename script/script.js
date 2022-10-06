const year = document.querySelector(".year");
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-bar-link")) {
      header.classList.remove("nav-open");
    }
  });
});
