//Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. 
//Every time you create a new game, it should select a new random number, and keep it secret from the player.

//Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

//After a correct guess, the game ends.

function guessingGame() {
    //we will need to set the winning number
    const answer = Math.floor(Math.random() * 100);
    //what is the point of this variable?
    let isOver = false;
    //counter of guesses taken
    let numGuesses = 0;

return function guess(num) {
    //what is (isOver) reading here
    if (isOver) return "the game is over, you already won!";
    numGuesses++;
    if (num === answer) {
        isOver = true;
        //what is this line translate too?
        const guess = numGuesses === 1 ? "guess" : "guesses";
        return `You won! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < answer) return `${num} is too low!`;
    if (num > answer) return `${num} is too high!`;
};


    //my attempt below
    //we will need to get the value guess and compare it to the winning number
// if (num === winningNum) {
//     return "you won!"
// } else {
//     if (num < winningNum) {
//         return "Too low!"
//     }
// } return "Too High!"
    //if the guess number and winning number match, then it is game over

    //if the guessing value is too high, return too high
    
    //if the value is too low, return to low

}

module.exports = { guessingGame };
