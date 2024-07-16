const challenges = [
    "Complete 10 push-ups and 10 squats!",
    "Read for 30 minutes.",
    "Draw a picture of your favorite animal.",
    "Write a short story.",
    "Go for a 15-minute walk.",
];

function newChallenge() {
    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    document.getElementById('challenge').textContent = challenge;
}

function startGame1() {
    alert("Starting Game 1: Clicker Game");
    // Add your game code here
}

function startGame2() {
    alert("Starting Game 2: Memory Game");
    // Add your game code here
}
