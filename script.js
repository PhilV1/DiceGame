'use strict';

const dicePlayer = document.getElementById('dicePlayer');
const diceComputer = document.getElementById('diceComputer');
const diceRoll = document.getElementById('roll');
const message = document.getElementById('message');
const playerScoreboard = document.getElementById('playerScore');
const computerScoreboard = document.getElementById('computerScore');
const playAgain = document.querySelector('.playAgain');

const playerName = document.getElementById('playerName');
const computerName = document.getElementById('computerName');

// Play Again
const resetGame = function () {
  playerScore = 0;
  computerScore = 0;
  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;
};

// Scores
let playerScore = 0;
let computerScore = 0;

// Generate Dice Roll
diceRoll.addEventListener('click', function () {
  let playerChoice = Math.trunc(Math.random() * 6) + 1;
  let computerChoice = Math.trunc(Math.random() * 6) + 1;
  dicePlayer.src = `./images/dice${playerChoice}.png`;
  diceComputer.src = `./images/dice${computerChoice}.png`;

  if (playerChoice > computerChoice) {
    if (playerScore < 4) {
      playerScore++;
      playerScoreboard.textContent = playerScore;
      console.log(playerScore);
      message.textContent = 'You won!';
      document.querySelector('.player').classList.add('darkgrey');
      document.querySelector('.computer').classList.remove('darkgrey');
      // player won add color to dice and remove textcolor
      playerName.classList.remove('nameColor');
      dicePlayer.classList.add('diceColor');
      // add opacity to computer
      computerName.classList.add('nameColor');
      diceComputer.classList.remove('diceColor');
    } else {
      console.log('You won the game');
      document.getElementById('roll').style.display = 'none';
      playerScore++;
      playerScoreboard.textContent = playerScore;
      message.textContent = 'You won the game!';
      playAgain.classList.remove('hidden');
      message.textContent = 'Congratulation, you won! Wanna play again?';
      document.querySelector('.player').classList.add('darkgrey');
      document.querySelector('.computer').classList.remove('darkgrey');
      playerName.classList.remove('nameColor');
      computerName.classList.add('nameColor');
      diceComputer.classList.remove('diceColor');
      dicePlayer.classList.add('diceColor');
    }
  } else if (computerChoice > playerChoice) {
    if (computerScore < 4) {
      computerScore++;
      computerScoreboard.textContent = computerScore;
      console.log(computerScore);
      message.textContent = 'You lost';
      document.querySelector('.computer').classList.add('darkgrey');
      document.querySelector('.player').classList.remove('darkgrey');
      computerName.classList.remove('nameColor');
      playerName.classList.add('nameColor');
      dicePlayer.classList.remove('diceColor');
      diceComputer.classList.add('diceColor');
    } else {
      console.log('You lost the game');
      document.getElementById('roll').style.display = 'none';
      computerScore++;
      computerScoreboard.textContent = computerScore;
      message.textContent = 'You lost.';
      playAgain.classList.remove('hidden');
      message.textContent = 'You lost the game. Better luck next time.';
      document.querySelector('.computer').classList.add('darkgrey');
      document.querySelector('.player').classList.remove('darkgrey');
      computerName.classList.remove('nameColor');
      playerName.classList.add('nameColor');
      dicePlayer.classList.remove('diceColor');
      diceComputer.classList.add('diceColor');
    }
  } else {
    console.log('It is a draw');
    message.textContent = 'It is a draw';
    document.querySelector('.computer').classList.remove('darkgrey');
    document.querySelector('.player').classList.remove('darkgrey');
    computerName.classList.remove('nameColor');
    playerName.classList.remove('nameColor');
    diceComputer.classList.remove('diceColor');
    dicePlayer.classList.remove('diceColor');
  }
});

playAgain.addEventListener('click', function () {
  resetGame();
  playAgain.classList.add('hidden');
  document.getElementById('roll').style.display = '';
  message.textContent = 'Press "Roll" to start the game.';
  document.querySelector('.computer').classList.remove('darkgrey');
  document.querySelector('.player').classList.remove('darkgrey');
  computerName.classList.remove('nameColor');
  playerName.classList.remove('nameColor');
  dicePlayer.classList.remove('diceColor');
  diceComputer.classList.remove('diceColor');
});
