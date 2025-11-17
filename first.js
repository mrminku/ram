// Theme toggle
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") root.classList.add("light");

themeBtn.addEventListener("click", () => {
  root.classList.toggle("light");
  const isLight = root.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demo
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Thanks! This is a demo form.";
  form.reset();
});
