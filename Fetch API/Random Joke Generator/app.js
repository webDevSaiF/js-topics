const jokeContainer = document.querySelector(".joke");
const button = document.querySelector(".btn");

function fetchJoke() {
  fetch(
    "https://v2.jokeapi.dev/joke/Any?type=single%20Reset%20Form%20Send%20Request%20%3E"
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.setup) printJoke(data.setup);
    });
}
function printJoke(string) {
  jokeContainer.textContent = string;
}
fetchJoke();
button.addEventListener("click", fetchJoke);
