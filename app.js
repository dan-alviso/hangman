const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  if (guess.match(/^[a-z0-9 ]$/i)) {
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
  }
});
