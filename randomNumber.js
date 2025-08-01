// randomNumber.js

function random() {
    return Math.floor(Math.random() * 100); // Returns a random number between 0 and 99
}

// Execute the function and store the returned value
const randomValue = random();
console.log(`Random Number: ${randomValue}`);

// Export the module
module.exports = { random };