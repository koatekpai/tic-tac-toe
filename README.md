Tic-tac-toe is a simple two-player game traditionally played on a 3x3 grid. 
The game involves two participants: one uses the symbol "X" and the other uses the symbol "O". 
Players take turns marking a single empty square on the grid with their symbol.

### Objective:
The primary goal of tic-tac-toe is to be the first player to form a straight line of three of your symbols. This line can be:
- **Horizontal** (e.g., top row, middle row, bottom row)
- **Vertical** (e.g., left column, middle column, right column)
- **Diagonal** (e.g., top-left to bottom-right or top-right to bottom-left)

### Rules:
1. **Turn Order:** Players decide who goes first. The first player typically uses "X", and the second player uses "O".
2. **Taking Turns:** Players alternate turns, marking one empty square on each turn.
3. **Winning the Game:** The game is won by the first player who aligns three of their symbols in a row, either horizontally, vertically, or diagonally.
4. **Draw:** If all nine squares are filled and neither player has achieved a line of three, the game ends in a draw (sometimes called a "cat's game").

### UI Design:
- The 3x3 grid would be designed with CSS Grid layout
- The grid would be centered on the webpage
- There would be an info panel at the top specifying which player's turn it is
- The info panel will also announce the winner or if it is a draw
- The "x" and "o" would be designed using "X" and "O" characters

### Classes:
- Player
- Game
- ?? Turn ??

### Game Design:
- The board grid would be modelled using 3 arrays named R1, R2, R3 (rows)
- Each of the arrays would be of lenght 3
- The possible values of the array would be "" (empty string) __for no value__, "X" __for player 1__, "O" __for player 2__.
- Clicking in the board should call the "play" method of class Game.
- The Game should have the following methods:
- -> start
- -> play
- -> checkScore
- -> end
 
