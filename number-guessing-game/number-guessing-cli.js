const readlineSync = require("readline-sync");

// Function to get a random number between 1 and 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Timer functions
let startTime, endTime;

const startTimer = () => {
  startTime = new Date();
};

const endTimer = () => {
  endTime = new Date();
  return (endTime - startTime) / 1000; // Time in seconds
};

// Difficulty levels
const difficulties = {
  1: { name: "Easy", attempts: 10 },
  2: { name: "Medium", attempts: 5 },
  3: { name: "Hard", attempts: 3 },
};

let highScore = Infinity; // High score tracker

// Function to display rules and high score
function displayWelcome() {
  console.log("Welcome to the Number Guessing Game!");
  console.log("Rules:");
  console.log("I'm thinking of a number between 1 and 100.");
  console.log(
    "You will have a limited number of chances based on the difficulty level you choose."
  );
  if (highScore !== Infinity) {
    console.log(`\nCurrent High Score: ${highScore} attempts.`);
  } else {
    console.log("\nNo high score yet.");
  }
}

// Main game logic
function playGame() {
  let playAgain = true;

  while (playAgain) {
    displayWelcome(); // Show rules and high score at the start of every game
    const numberToGuess = getRandomNumber();

    console.log("\nPlease select the difficulty level:");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");

    const difficultyChoice = readlineSync.questionInt(
      "Enter your choice (1, 2, or 3): "
    );
    const { name, attempts } =
      difficulties[difficultyChoice] || difficulties[2]; // Default to Medium if invalid input

    console.log(`\nGreat! You have selected ${name} difficulty level.`);
    console.log(`You have ${attempts} chances to guess the number.\n`);
    startTimer();

    let attemptCount = 0;
    let isGuessed = false;

    while (attemptCount < attempts) {
      const userGuess = readlineSync.questionInt("Enter your guess: ");
      attemptCount++;

      if (userGuess === numberToGuess) {
        console.log(
          `\nCongratulations! You guessed the correct number in ${attemptCount} attempts.`
        );
        const timeTaken = endTimer();
        console.log(`It took you ${timeTaken} seconds to guess the number.`);
        if (attemptCount < highScore) {
          highScore = attemptCount;
          console.log(`New high score: ${attemptCount} attempts!`);
        }
        isGuessed = true;
        break;
      } else if (userGuess > numberToGuess) {
        console.log("Incorrect! The number is less than your guess.");
      } else {
        console.log("Incorrect! The number is greater than your guess.");
      }

      // Provide a hint after 3 incorrect attempts
      if (attemptCount === 3) {
        const hint = numberToGuess % 2 === 0 ? "even" : "odd";
        console.log(`Hint: The number is ${hint}.`);
      }
    }

    if (!isGuessed) {
      console.log(
        `\nSorry, you've run out of chances. The correct number was ${numberToGuess}.`
      );
    }

    const playAgainInput = readlineSync
      .question("\nDo you want to play again? (yes/no): ")
      .toLowerCase();
    playAgain = playAgainInput === "yes";
  }

  console.log("Thanks for playing! Goodbye.");
}

// Run the game
playGame();
