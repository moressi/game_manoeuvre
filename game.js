const gameArea = document.getElementById('gameArea');
const player = document.getElementById('player');
const startButton = document.getElementById('startButton');
let obstacles = [];
let score = 0;

// Start game when button is clicked
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide the button
    startGame();
});

// Add event listeners for player movement
document.addEventListener('keydown', (event) => {
    const playerRect = player.getBoundingClientRect();
    const gameAreaRect = gameArea.getBoundingClientRect();

    if (event.key === 'ArrowLeft' || event.key === 'a') {
        // Move left, but prevent going out of bounds
        if (playerRect.left > gameAreaRect.left) {
            player.style.left = player.offsetLeft - 20 + 'px';
        }
    } else if (event.key === 'ArrowRight' || event.key === 'd') {
        // Move right, but prevent going out of bounds
        if (playerRect.right < gameAreaRect.right) {
            player.style.left = player.offsetLeft + 20 + 'px';
        }
    }
});

function startGame() {
    setInterval(() => {
        createObstacle();
    }, 1000); // Create a new obstacle every second
}

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');

    // Set random horizontal position
    const randomLeft = Math.random() * (gameArea.offsetWidth - 50);
    obstacle.style.left = randomLeft + 'px';

    // Set random speed
    const speed = Math.random() * 15 + 5; // Random speed between 5 and 20

    gameArea.appendChild(obstacle);
    obstacles.push({ element: obstacle, speed });

    moveObstacle(obstacle, speed);
}

function moveObstacle(obstacle, speed) {
    let top = 0;

    const interval = setInterval(() => {
        top += speed;
        obstacle.style.top = top + 'px';

        // Check for collision with player
        const playerRect = player.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            clearInterval(interval); // Stop moving the obstacle
            alert('Game Over! Your score: ' + score);
            document.location.reload(); // Reload the game
        }

        // Remove obstacle if it goes out of bounds
        if (top > gameArea.offsetHeight) {
            obstacle.remove();
            obstacles = obstacles.filter(obj => obj.element !== obstacle);
            score++;
            console.log('Score:', score);
        }
    }, 50);
}