const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  if (guess.match(/^[a-z0-9 ]$/i)) {
    game1.makeGuess(guess);
    render();
  }
});

render();
