const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors')
const playerScoreId = document.getElementById('playerScore');
const computerScoreId = document.getElementById('computerScore');
const scoreBoard = {
 player: 0,
 computer: 0
}
const item = document.querySelectorAll('.item');
let winner;
const textWrapper = document.getElementById('textWrapper');
const textStart = 'please choose';
textWrapper.innerHTML = textStart;
const resetBtn = document.getElementById('reset');

const pick = () => {
 const computerOptions = ['rock', 'paper', 'scissors'];
 let computerPick = computerOptions[Math.floor(Math.random() * 3)];
 // let computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
 let playerPick = event.target.id;
 selectionPick(computerPick, playerPick);
 const winner = selectionPick(computerPick, playerPick);
 showWinner(winner, computerPick, playerPick);

}

const selectionPick = (computerPick, playerPick) => {

 if (playerPick === computerPick) {
  return 'tie';
 }
 else if (computerPick === 'paper' && playerPick === 'rock') {
  return 'computer';
 } else if (computerPick === 'rock' && playerPick === 'scissors') {
  return 'computer';
 } else if (computerPick === 'scissors' && playerPick === 'paper') {
  return 'computer';
 }

 if (playerPick === 'paper' && computerPick === 'rock') {
  return 'player';
 } else if (playerPick === 'rock' && computerPick === 'scissors') {
  return 'player';
 } else if (playerPick === 'scissors' && computerPick === 'paper') {
  return 'player';
 }
}

const showWinner = (winner, computerPick, playerPick) => {
 if (winner === 'player') {
  textWrapper.innerHTML = `player picked <span class="selection">${playerPick}</span> and computer picked <span class="selection">${computerPick}</span>. <span class="winningPick">Player WON!</span>`;
  scoreBoard.player++;
  playerScoreId.innerHTML = scoreBoard.player;
 } else if (winner === 'computer') {
  textWrapper.innerHTML = `computer picked <span class="selection">${computerPick}</span> and player picked <span class="selection">${playerPick}</span>. <span class="winningPick">computer WON!</span>`;
  scoreBoard.computer++;
  computerScoreId.innerHTML = scoreBoard.computer;
 } else {
  textWrapper.innerHTML = 'tie';

 }
}

const newGame = () => {
 scoreBoard.computer = 0;
 scoreBoard.player = 0;
 playerScoreId.innerHTML = scoreBoard.player;
 computerScoreId.innerHTML = scoreBoard.computer;
 textWrapper.innerHTML = textStart;
}

playerScoreId.innerHTML = scoreBoard.player;
computerScoreId.innerHTML = scoreBoard.computer;

item.forEach(choice => choice.addEventListener('click', pick));

resetBtn.addEventListener('click', () => {
 newGame();
});




