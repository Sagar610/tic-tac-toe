# Tic-Tac-Toe Game

A web-based Tic-Tac-Toe game built using React.js and Tailwind CSS. This game allows you to play against a bot or with a friend. It includes features like a leaderboard, timer, and game difficulty settings when playing against the bot.

## Features

### 1. **Game Modes**:
   - **Play with Friend**: Two players can play on the same device.
   - **Play with Bot**: Play against an AI bot. The bot can be set to two difficulty levels:
     - **Easy**
     - **Hard**

### 2. **User Interface**:
   - **Beautiful Design**: The game board and leaderboard are designed using **Tailwind CSS** for a responsive and modern look.
   - **Tic-Tac-Toe Grid**: A 3x3 grid where players can choose 'X' or 'O'.
   - **Color Themes**: 'X' is red, and 'O' is blue, with big text for easy readability.
   - **Score & Leaderboard**: Displays the current score and keeps track of wins and draws.
   - **Timer**: A game timer that counts down during each round.

### 3. **Game Logic**:
   - **Winning Condition**: The game checks for a winner after every move. If no winner is found and the board is full, it’s a draw.
   - **Bot Logic**: The bot follows a simple algorithm for moves. Depending on the difficulty level, it either plays randomly (easy) or follows an optimal strategy (hard).
   
### 4. **Leaderboard**:
   - **Displays Player Scores**: The leaderboard updates after each game with the number of wins for each player ('X' and 'O').
   - **Timed Matches**: Tracks and displays the time spent on each game session.

### 5. **Responsive Layout**:
   - The game is responsive and works on mobile and desktop devices.

### 6. **Setup Game**:
   - On starting, players can choose between playing with a friend or a bot.
   - If playing with a friend, the game asks for both players’ names.
   - If playing with the bot, it asks only for the user’s name.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Sagar610/tic-tac-toe.git
cd tic-tac-toe
```

2. Install the required dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

This will start the development server and open the application in your browser.

## Deployed Version

You can play the game live at the following link:

[Play Tic-Tac-Toe](https://advance-sudoku-game.vercel.app/)

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling.
- **JavaScript**: For game logic, timer, and interactions.
- **CSS**: For custom styling and layout adjustments.

## Screenshots

![Tic-Tac-Toe Game](https://via.placeholder.com/600x400.png)

## Contributing

If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Please ensure that your changes align with the current project structure and follow best practices.

## Connect with Me

- **GitHub**: [Sagar610](https://github.com/Sagar610)
- **LinkedIn**: [Sagar Gondaliya](https://www.linkedin.com/in/sagar-gondaliya/)
- **Deployed Projects**: [Advanced Sudoku Game](https://advance-sudoku-game.vercel.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.