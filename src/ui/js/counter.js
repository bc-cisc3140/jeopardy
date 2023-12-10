// Initialize an empty object to store the scores
let scores = {};

// Initialize an empty array to store the names
let userNames = [];

// Loop three times to ask for each user's name
for (let i = 1; i <= 3; i++) {
    let name = prompt(`Please enter the name for User ${i}:`);
    userNames.push(name);
    scores[name] = 0; // Initialize score for this user
}

// Function to update score display
function updateScore(user, i) {
    document.getElementById('user' + (i+1) + 'Button').innerText = user + ": " + scores[user];
}

// Add event listeners to increment and decrement buttons
userNames.forEach((user, i) => {
    document.getElementById('user' + (i+1) + 'Increment').addEventListener('click', () => {
        scores[user] += 100;
        updateScore(user, i);
    });
    document.getElementById('user' + (i+1) + 'Decrement').addEventListener('click', () => {
        scores[user] -= 100;
        updateScore(user, i);
    });
});

// Update the button text with the user names
userNames.forEach((user, i) => {
    updateScore(user, i);
});