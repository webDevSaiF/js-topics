//! DEBOUNCE
const input = document.querySelector("input");
const defaultCase = document.querySelector(".default");
const debounceCase = document.querySelector(".debounce");

const debounce = (cb, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
};

input.addEventListener("input", (e) => {
  //* DEFAULT BEHAVIOR
  defaultCase.innerText = "Default: " + e.target.value;

  updateDebounceText(e.target.value);
});

//* DEBOUNCE BEHAVIOR
const updateDebounceText = debounce((text) => {
  debounceCase.innerText = "Debounce: " + text;
});
