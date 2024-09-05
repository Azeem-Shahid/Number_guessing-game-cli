
# Number Guessing Game 🎯

A fun, interactive CLI-based game where you try to guess a randomly selected number between 1 and 100. Choose your difficulty, get hints, and race against the clock! Keep track of your high score and challenge yourself in multiple rounds.

## Features
- Random number selection between 1 and 100.
- Three difficulty levels:
  - **Easy**: 10 attempts
  - **Medium**: 5 attempts
  - **Hard**: 3 attempts
- Timer to track how long it takes to guess the correct number.
- Hints after 3 incorrect attempts (e.g., whether the number is even or odd).
- Multiple rounds of gameplay with an option to play again.
- High score tracking: the fewest number of attempts to guess the number.

## How to Play
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the game:
   ```bash
   node index.js
   ```
4. Follow the on-screen instructions to select a difficulty level and guess the number.

## Example Gameplay
```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2
Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.

Enter your guess: 25
Incorrect! The number is greater than 25.

Enter your guess: 35
Congratulations! You guessed the correct number in 4 attempts.
```

## Number Guessing Game Roadmap
If you want to explore a project-based learning roadmap for building and improving your number guessing game, check out [this roadmap](https://roadmap.sh/projects/number-guessing-game).

## Requirements
- Node.js (v12 or higher)
- `readline-sync` package (automatically installed via `npm install`)

## How to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request and describe your changes.

## License
This project is licensed under the MIT License.
```

This version includes the link to the project roadmap at [roadmap.sh](https://roadmap.sh/projects/number-guessing-game) to provide additional learning resources for enhancing the game.
