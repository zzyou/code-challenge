/* Rock / Paper / Scissor
Build a game of Rock/Paper/Scissor where through the use of the prompt function, 
a user can enter their choice 
and based on a random selection - they can either tie/win or lose against a computer. */

function game() {
    let userChoice = window.prompt('What is your choice of rock, paper, or scissor?').toLowerCase();

    let random = Math.floor(Math.random() * 3);
    let choice = ['rock', 'paper', 'scissor'];
    let computerChoice = choice[random];

    validation();

    function validation() {
        if (choice.includes(userChoice)) {
            gameLogic(); 
        }
        else {
            userChoice = window.prompt('Invalid input. Please only enter rock, paper or scissor.');
            return validation();
        }
    }

    function gameLogic() {
        if (userChoice === computerChoice) {
            alert(`${userChoice} V.S. ${computerChoice}. It's a tie!`);
        }
    
        else if ( ( userChoice === 'rock' && computerChoice === 'paper' )
            || ( userChoice === 'scissor' && computerChoice === 'rock' )
            || ( userChoice === 'paper' && computerChoice === 'scissor') ) {
            alert(`${userChoice} V.S. ${computerChoice}. You lose.`);
        }
    
        else if ( ( computerChoice === 'rock' && userChoice === 'paper' )
            || ( computerChoice === 'scissor' && userChoice === 'rock' )
            || ( computerChoice === 'paper' && userChoice === 'scissor') ) {
            alert(`${userChoice} V.S. ${computerChoice}. You win!`);
        }

        let end = window.prompt('Do you want to end the game? Yes or No');

        if ( end.toLowerCase().includes('y') ) {
            return alert('Thank you for playing!');
        } else {
            game();
        }
    }
}

game();
