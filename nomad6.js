const sel = document.querySelector("select");

function handleChange() {
  localStorage.setItem("currentCountry", sel.value);
}

function loadCountry() {
  const currentCountry = localStorage.getItem("currentCountry");
  if (currentCountry === null) {
    sel.addEventListener("change", handleChange);
  } else {
    sel.value = currentCountry;
    sel.addEventListener("change", handleChange);
  }
}

function init() {
  loadCountry();
}

init();
