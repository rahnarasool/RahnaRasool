const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const themeButton = document.getElementById("themeButton");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeButton.title = isLight ? "Switch to dark theme" : "Switch to light theme";
  });
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
