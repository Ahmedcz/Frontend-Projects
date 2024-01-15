//Defining user input
const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {

        return userInput;
    } else {
       console.log('Error, please type rock, paper or scissors.');   
    }
    
};

//Defining computer input

const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);

   switch (randomNumber) {
       case 0:
           return 'rock';
       case 1:
           return 'paper';
       case 2:
           return 'scissors';
       default:
           // Handle unexpected cases, if any
           return 'unknown';
   }
};


//Determine a winner

const determineWinner = (userChoice, computerChoice) => {

    if(userChoice === computerChoice) {

      return 'It is a tie !';
    }

    if (userChoice === 'rock') {

      if(computerChoice === 'paper') {

      return 'Sorry, computer won !';
      } else {
         return 'Gongratulations, you won';
      }
    }
    if(userChoice === 'paper') {

      if(computerChoice === 'scissors') {

         return 'Sorry, computer won !';
       } else {
            return 'Gongratulations, you won';
         }
      }
      if(userChoice === 'scissors') {

         if(computerChoice === 'rock') {

            return 'Sorry, computer won !';
         }
         else {
            return 'Gongratulations, you won';
         }
      }
    };
//Play game

const playGame = () => {

   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You threw '+ userChoice);
   console.log('The computer threw ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}

playGame();
//Congrats