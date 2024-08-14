let computerscore = 0;
let userscore = 0;
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log("computer choice was ", computerChoice);
    return computerChoice;
}

alert("Welcome Amanda, you will be playing rock paper scissors against a computer, you will play 5 rounds. If it is a draw you will be prompted again to choose. Good luck on your journey!")

function getHumanChoice() {
    let userChoice;
    do {
        userChoice = prompt("So then Amanda, pick your poison. Rock, paper, or scissors?");
        
        if (userChoice) {
            userChoice = userChoice.trim().toLowerCase();
        }

        if (userChoice === null) {
            alert("Oh woah! Why you hit that? Are you trying to quit? Nuh-uh. You gotta finish this, good luck!");
        } else if (userChoice.includes(" ")) {
            alert("One word only, Amanda! No spaces allowed. Try again.");
        } else if (userChoice === "scissor") {
            alert("Could you please use plural for scissor? Thanks!")
        } else if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            alert(`Invalid choice Amanda, what even is "${userChoice}"? Just try again.`);
        }

    } while (userChoice === null || userChoice.includes(" ") || (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"));

    // Convert the valid string choice to a corresponding number (0 for rock, 1 for paper, 2 for scissors)
    if (userChoice === "rock") {
        return 0;
    } else if (userChoice === "paper") {
        return 1;
    } else if (userChoice === "scissors") {
        return 2;
    }
}

function playRound() {
    let humanchoice = getHumanChoice();
    let computerchoice = getComputerChoice();

    if (computerchoice === humanchoice) {
        do {
            alert("That was a draw, run it back gang!");
            humanchoice = getHumanChoice();
            computerchoice = getComputerChoice();
            console.log(`Human choice was ${humanchoice}, computer choice was ${computerchoice}`);
        } while (humanchoice === computerchoice);
    }

    if (humanchoice === 0 && computerchoice === 1) {
        alert("Computer had paper, you had rock. You lost this round.");
        computerscore++;
    } else if (humanchoice === 1 && computerchoice === 0) {
        alert("Computer had rock, you had paper. You won this round.");
        userscore++;
    } else if (humanchoice === 2 && computerchoice === 0) {
        alert("Computer had rock, you had scissors. You lost this round.");
        computerscore++;
    } else if (humanchoice === 0 && computerchoice === 2) {
        alert("Computer had scissors, you had rock. You won this round.");
        userscore++;
    } else if (humanchoice === 1 && computerchoice === 2) {
        alert("Computer had scissors, you had paper. You lost this round.");
        computerscore++;
    } else if (humanchoice === 2 && computerchoice === 1) {
        alert("Computer had paper, you had scissors. You won this round.");
        userscore++;
    }

    console.log(`Final result: Human choice was ${humanchoice}, Computer choice was ${computerchoice}`);

}

function getResult(computerscore, amandascore) {
    if (computerscore < amandascore){
        alert("OMG, you did it Amanda! You won against computer, now try to win against Harry!")
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    else{
        alert("Uh-oh Amanda, do better! Computer won!")
        window.location.href = "https://www.youtube.com/watch?v=Cmcd7XZ6ppk";
    }

}

function main() {
    // playRound();

    for(i = 0; i < 5; i++){
        playRound();
    }

    getResult(computerscore, userscore);
}

main();