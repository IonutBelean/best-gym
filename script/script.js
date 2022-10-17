const year = document.querySelector(".year");
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const calculateBtn = document.querySelector(".calculate-btn");
const result = document.querySelector(".result");

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

const addValidationNumberInput = (inputElement, inputLabel) => {
  inputElement.addEventListener("input", (event) => {
    let value = event.target.value;

    if (isNaN(value)) {
      result.innerHTML = `${inputLabel} is not a number`;
    } else {
      result.innerHTML = "";
    }
  });
};

addValidationNumberInput(height, "Height");
addValidationNumberInput(weight, "Weight");
// addValidationNumberInput(age, "Age");

calculateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const fistResult = Number(weight.value) / Number(height.value) ** 2;
  const secondResult = fistResult.toFixed(2);

  if (height.value === "" || height.value == null) {
    alert("Please fill Height field");
    result.innerHTML = "";
  } else if (weight.value === "" || weight.value == null) {
    alert("Please fill Weight field");
    result.innerHTML = "";
  }

  if (secondResult < 18.6) {
    result.innerHTML = `Under weight: ${secondResult}`;
  } else if (secondResult >= 18.6 && secondResult < 24.9) {
    result.innerHTML = `Normal weight: ${secondResult}`;
  } else if (secondResult >= 24.9) {
    result.innerHTML = `Over weight: ${secondResult}`;
  }
});
