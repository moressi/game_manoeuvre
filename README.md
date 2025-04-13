# game_manoeuvre ~ Avoid the Falling Obstacles

A simple browser-based game where the player must avoid falling obstacles. The game ends when an obstacle collides with the player. The player's score increases as obstacles are successfully avoided.

---

## Features
- **Player Movement**: Use the arrow keys (`←` and `→`) or `A`/`D` keys to move the player left and right.
- **Random Obstacles**: Obstacles fall from random positions at random speeds.
- **Collision Detection**: The game ends immediately when an obstacle collides with the player.
- **Score Tracking**: The score increases for every obstacle successfully avoided.

---

## How to Play
1. Open the game in your browser by running `index.html`.
2. Click the "Start Game" button to begin.
3. Use the following keys to move the player:
   - `ArrowLeft` or `A`: Move left.
   - `ArrowRight` or `D`: Move right.
4. Avoid the falling obstacles. The game ends if an obstacle hits the player.
5. Your score is displayed in an alert when the game ends.

---

## Controls
- **Move Left**: `ArrowLeft` or `A`
- **Move Right**: `ArrowRight` or `D`

---

## Installation
1. Clone or download this repository to your local machine.
2. Open the `index.html` file in any modern web browser.

---

## Customization
1. **Player Shape**: Modify the `#player` CSS in `index.html` to change the player's appearance (e.g., use a circle, triangle, or custom image).
2. **Obstacle Shape**: Modify the `.obstacle` CSS to change the obstacle's appearance.
3. **Game Speed**: Adjust the `setInterval` duration in the `startGame` function in `game.js` to control how often obstacles are created.
4. **Obstacle Speed**: Modify the `speed` range in the `createObstacle` function to make obstacles fall faster or slower.

---

## Technologies Used
- **HTML**: Structure of the game.
- **CSS**: Styling for the game area, player, and obstacles.
- **JavaScript**: Game logic, including player movement, obstacle creation, and collision detection.

---

## Future Improvements
- Add levels with increasing difficulty.
- Include sound effects and background music.
- Display the score on the screen instead of an alert.
- Add a restart button after the game ends.
