// Fonction du jeu 

const getUserChoice = userInput => { 
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
    if(userChoice === computerChoice) {
      return 'The game is a tie!';
    } 
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'The computer won!';
      } else{
        return 'You won!';
      }
    }
  
  
  if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The computer won!';
      } else{
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

  const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
  
  return [determineWinner(userChoice, computerChoice), userChoice, computerChoice]
  };
  

// method recuperation du jeu vers bouton

  document.querySelector(".mini-game-button").addEventListener('click', function () {
    
    console.log('click');


// DOM

 const body = document.querySelector("body") 
 const user = document.createElement("div")
 const computer = document.createElement("div")
 const resultat = document.createElement("div")

 user.classList.add("user")
 computer.classList.add("computer")
  
 const result = playGame()

 user.textContent = `${result[1]}`

 computer.textContent = `${result[2]}`

 resultat.textContent = `${result[0]}`

 body.appendChild(user)
 body.appendChild(computer)
 body.appendChild(resultat)

 

});






