console.log("This is working");
const hands = ["rock", "paper", "scissors"];
const computerChoice = getComputerHand();
const personChoice = getPersonChoice();

console.log("computerChoice: " + computerChoice);
console.log("personChoice: " + personChoice);
console.log(compare(computerChoice,personChoice));

function getComputerHand() {
    const randomNumber = parseInt(Math.random() * 10) % 3;
    const computerHand = hands[randomNumber];
    return computerHand;
};
function getPersonChoice() {
    const randomNumberPerson = parseInt(Math.random() * 10) % 3;
    const personHand = hands[randomNumberPerson];
    return personHand;
};
function compare(choice1, choice2) {
    switch (choice1) {
        case "rock": if (choice2 === "rock") {
            return ("Tie");
        } else if (choice2 === "paper") {
            return ("You Win");

        } else return ("You lose");
            break;
        case "paper": if (choice2 === "rock") {
            return ("You lose");
        } else if (choice2 === "paper") {
            return ("Tie");
        } else return ("You Win");
            break;
        case "scissors": if (choice2 === "rock") {
            return ("You Win");
        } else if (choice2 === "paper") {
            return ("You Lose");
        } else return ("Tie");
            break;
    }

};


