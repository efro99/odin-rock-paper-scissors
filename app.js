console.log("Hello World");

const getComputerChoice = () => {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const value = Math.floor(Math.random() * 3);
    console.log(value);
    return options[value];
}


const getHumanChoice = () => {
    const choice = prompt("Please into your choice");
    console.log(choice);

    switch(choice.toUpperCase())
    {
        case "ROCK": 
        case "PAPER":
        case "SCISSORS": 
            return choice.toUpperCase();
            break;
        default:
            alert("Please into ROCK, PAPER OR SCISSORS")
            return getHumanChoice();
    }
}

const playRound = (humanChoice, computerChoice) => {
    

    if (humanChoice === computerChoice )
        return console.log("Draw");
    
    if(
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ){
        humanScore++;
        console.log("Human Wins");
    } else {
        computerScore++; 
        return console.log("Computer wins!");
    }
}

let computerScore = 0;
let humanScore = 0;



const playGame = () => {
    for(var i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humnanSelection = getHumanChoice();
        playRound(humnanSelection, computerSelection);
    } 

    console.log(`Results: Human ${humanScore} - Computer ${computerScore}`);
}

playGame();
