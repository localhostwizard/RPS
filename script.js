function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log("computer choice was ", computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let userChoice;
    do {
        userChoice = parseInt(prompt("Please enter your number: 0 is rock, 1 is paper, 2 is scissor."));
        if (isNaN(userChoice) || userChoice < 0 || userChoice > 2) {
            alert("Invalid choice Amanda, please try again.");
        }
    } while (isNaN(userChoice) || userChoice < 0 || userChoice > 2);
    
    return userChoice;
}

function playRound(){
    let humanchoice = getHumanChoice();
    let computerchoice = getComputerChoice();

    console.log("Huuuuuman chouice is ", humanchoice);

}

function getResult(computerscore, userscore) {
    if (computerscore < userscore){
        alert("OMG, you did it Amanda! You won against computer, now try to win against Harry.!")
    }

    else{
        alert("Uh-oh Amanda, do better! Computer won!")
    }

}

function main() {
    let computerscore = 0;
    let userscore = 0;

    for(i = 0; i < 5; i++){
        playRound();
    }

    getResult(computerscore, userscore);
}

main();
