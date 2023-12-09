const URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const mainContainer = document.querySelector(".wrapper");
const form = mainContainer.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchData = form.querySelector("input").value;
  fetch(`${URL}/${searchData}`)
    .then((response) => response.json())
    .then((data) => printData(data));
  form.reset();
});
function printData(data) {
  const printWord = mainContainer.querySelector(".word-container h3");
  const printPhonetic = mainContainer.querySelector(
    ".details-container > div > p"
  );
  const partsOfSpeech = mainContainer.querySelector(".details-container  > p");
  const wordMeaning = mainContainer.querySelector(".word-meaning");
  const wordExample = mainContainer.querySelector(".word-example");
  const phoneticSound = document.querySelector(".phonetic-sound");
  const phoneticSoundPlayButton = mainContainer.querySelector(
    ".sub-details-container button"
  );
  if (!data[0]) return (printWord.textContent = "Word Not Found");
  const { word, phonetic, phonetics, meanings } = data[0];
  if (word) printWord.textContent = word;

  if (!phonetic) {
    printPhonetic.textContent = phonetics[1]["text"];
  } else printPhonetic.textContent = phonetic;

  if (meanings) {
    let printPOS = "";
    let hasExamples = [];
    let printExample = "";
    meanings.forEach((meaning, i, arr) => {
      // PRINT WORD MEANING
      wordMeaning.innerText = "";
      meaning.definitions.forEach((def, i, arr) => {
        const span = document.createElement("span");
        span.innerText = def.definition;
        span.className = "word-definition";
        wordMeaning.append(span);
      });
      printPOS += meaning.partOfSpeech;
      if (i !== arr.length - 1) printPOS += "/";

      // STORE WORD EXAMPLE
      hasExamples = meaning.definitions.filter(
        (definition) => definition.example
      );
    });

    partsOfSpeech.textContent = printPOS;
    if (hasExamples.length === 0) return;
    hasExamples.map((definition, i, arr) => {
      printExample += definition.example;
      if (i !== arr.length - 1) printExample += " ";
    });
    wordExample.textContent = printExample;
  }
  if (phonetics) {
    const hasAudio = phonetics.filter((phonetic) => phonetic.audio);
    if (hasAudio.length) {
      phoneticSound.src = hasAudio[0].audio;
      phoneticSoundPlayButton.addEventListener("click", () =>
        phoneticSound.play()
      );
    } else phoneticSoundPlayButton.style.display = "none";
  }
}
