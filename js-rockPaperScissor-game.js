/* Rock / Paper / Scissor
Build a game of Rock/Paper/Scissor where through the use of the prompt function, 
a user can enter their choice 
and based on a random selection - they can either tie/win or lose against a computer. */

function game() {
    let userChoice = prompt('What is your choice of rock, paper, or scissor?').toLowerCase();

    let choice = ['rock', 'paper', 'scissor'];
    let shortChoice = ['r', 'p', 's'];
    
    let random = Math.floor(Math.random() * 3);
    let computerChoice = choice[random];

    validation();

    function validation() {
        if (choice.includes(userChoice) || shortChoice.includes(userChoice)) {
            gameLogic();
            return endGame();
        }
        // If the user enters nothing, he or she may want to end the game.
        else if (userChoice.length === 0) {
            return endGame();
        }
        userChoice = prompt('Invalid input. Please only enter rock, paper or scissor.').toLowerCase();
        return validation();
    }

    function gameLogic() {
        // gameLogic() always runs with validation(), 
        // which means userChoice meets the criteria of choice or shortChoice,
        // so only the first index of userChoice needs to be checked.
        if (userChoice[0] === computerChoice[0]) {
            return alert(`${userChoice} V.S. ${computerChoice}. It's a tie!`);
        }

        else if ( ( userChoice[0] === 'r' && computerChoice === 'paper' )
            || ( userChoice[0] === 's' && computerChoice === 'rock' )
            || ( userChoice[0] === 'p' && computerChoice === 'scissor') ) {
            return alert(`${userChoice} V.S. ${computerChoice}. You lose.`);
        }
    
        return alert(`${userChoice} V.S. ${computerChoice}. You win!`);
    }

    function endGame() {
        // let end = prompt('Do you want to end the game? Yes or No').toLowerCase();
        // // 'Yes.', Yes', 'YES', 'yes', 'Y', 'y' are all accepted.
        // // If the user enters nothing, game ends too:
        // if ( end[0] === 'y' || end.length === 0 ) {
        //     return alert('Thank you for playing!');
        // }
        // return game();

        // use confirm instead of prompt to get true/flase:
        let end = confirm('Do you want to end the game?');
        if (end) {
            return alert('Thank you for playing!');
        }
        return game();
    }
}

game();
