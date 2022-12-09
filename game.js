// Fonction du jeu
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    } else {
      console.log('Error');
    }
  }
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
};
const playGame = (param) => {
    const userChoice = getUserChoice(param);
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    return [
        determineWinner(userChoice, computerChoice),
        userChoice,
        computerChoice,
    ];
};
// method recuperation du jeu vers bouton
document.querySelector(".mini-game-button").addEventListener('click', function () {
    const value = document.getElementById("input-game").value
    console.log(value)
// DOM
    const body = document.querySelector('.result-game');
    const user = document.createElement('div');
    const computer = document.createElement('div');
    const resultat = document.createElement('div');
    user.classList.add('user');
    computer.classList.add('computer');
    resultat.classList.add('resultat');
    user.style.color = '#191970';
    computer.style.color = '#8B4513';
    const result = playGame(value);
    body.innerHTML = '';
    user.textContent = `${result[1]}`;
    computer.textContent = `${result[2]}`;
    if(result[0].includes("computer")) {
        resultat.style.color = '#FF0000';
    }
    if(result[0].includes("You")) {
        resultat.style.color = '#2E8B57';
    }
    if(result[0].includes("tie")) {
        resultat.style.color = '#FF8C00';
    }
    resultat.textContent = `${result[0]}`;
    body.appendChild(user);
    body.appendChild(computer);
    body.appendChild(resultat);
});