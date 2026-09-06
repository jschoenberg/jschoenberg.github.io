(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var savedTheme = localStorage.getItem("theme");
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var theme = savedTheme || (prefersLight ? "light" : "dark");

  function setTheme(nextTheme) {
    var isLight = nextTheme === "light";
    root.dataset.theme = nextTheme;
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    toggle.querySelector(".theme-icon").textContent = isLight ? "\u263e" : "\u2600";
  }

  setTheme(theme);
  toggle.addEventListener("click", function () {
    var nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  });
}());
