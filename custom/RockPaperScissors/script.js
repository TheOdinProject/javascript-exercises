function playGame() 
{

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice()
    {
        let rand = Math.random();
        if (rand < 0.33) return "rock"
        else if (rand < 0.66) return "paper"
        else return "scissors"
    }

    function getHumanChoice()
    {
        return prompt("> ").toLowerCase();
    }

    function playRound(computerChoice, humanChoice)
    {
        console.log("You: " + humanChoice);
        console.log("Computer: " + computerChoice)
        if (humanChoice === computerChoice) console.log("Tie!");
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) 
        {
            console.log("You won this round!");
            humanScore++;
        }
        else 
        {
            console.log("You lost this round :(");
            computerScore++;
        }
        console.log();
    }

    for (let i = 0; i < 4; i++) 
    {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore > computerScore) console.log("\n!! YOU WON !!");
    else console.log("\nYou Lost The Game :(");
}

playGame();
