// Function to roll the dice
function rollDice() {
    // Generate random numbers for both players
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Select the dice images
    let leftDice = document.querySelector(".img1");
    let rightDice = document.querySelector(".img2");

    // Update the dice images
    leftDice.setAttribute("src", `images/dice${randomNumber1}.png`);
    rightDice.setAttribute("src", `images/dice${randomNumber2}.png`);

    // Select the <h1> element
    let header = document.querySelector("h1");

    // Determine the winner
    if (randomNumber1 > randomNumber2) {
        header.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        header.innerHTML = "Player 2 Wins! 🚩";
    } else {
        header.innerHTML = "It's a Draw! 🎲";
    }
}

// Add event listeners to both buttons
let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", rollDice));
