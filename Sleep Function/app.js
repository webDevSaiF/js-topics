//! SLEEP FUNCTION
const input = document.querySelector("input");
const defaultCase = document.querySelector(".default");

input.addEventListener("input", async (e) => {
  await sleep(2000);
  defaultCase.innerText = "Default: " + e.target.value;
});

//* SLEEP FUNCTION
const sleep = async (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
