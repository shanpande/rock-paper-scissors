function getComputerChoice(){
    const choices =  [ 'Rock', 'Paper', 'Scissors'];
    const option = Math.floor(Math.random(3) * 3);

    return choices[option];
}

function playRound(playerSelection, computerSelection){
    let resultString="";
    // Paper vs Rock --> Paper wins
    // Rock vs Scissors --> Rock win
    // Paper vs Scissors --> Scissors win
    let userSelection=playerSelection.toUpperCase();
    let compSelection = computerSelection.toUpperCase();
    if ( (userSelection === 'PAPER' && compSelection === 'ROCK') 
        || (userSelection === 'ROCK' && compSelection === 'SCISSORS') 
        || (userSelection === 'SCISSORS' && compSelection === 'PAPER') ) {
            resultString = `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if (userSelection.toUpperCase() == compSelection.toUpperCase()){
            resultString = `We have a TIE - ${playerSelection} and  ${computerSelection}`;
        }
        else{
            resultString = `You Lose! ${playerSelection} beaten by ${computerSelection}`;
        }

    return resultString;
}

function game(){
    let userWins=0, computerWins=0, ties=0;
    let resultString = "";
    const choices =  [ 'ROCK', 'PAPER', 'SCISSORS'];
    let playerSelection;

    for(let i = 0; i <5; i++){
        let promptmessage = `Enter your choice ${choices}: `;
        while ( true ){
            playerSelection = prompt(promptmessage);
            if ( choices.indexOf(playerSelection.toUpperCase()) != -1 ){
                break;
            }
            promptmessage=`${playerSelection} not a choice. Enter your choice ${choices}`
        }
        const computerSelection = getComputerChoice();
        resultString=playRound(playerSelection,computerSelection);
        //console.log(`Round ${i+1} - ${resultString}`);
        writeOutput(resultString);

        if (resultString.startsWith("You Win") ){
            userWins++;
        }
        else if ( resultString.startsWith("You Lose")){
            computerWins++;
        }
        else{
            ties++;
        }
    }

    if ( userWins > computerWins){
        console.log(`User wins ${userWins} - ${computerWins}`);
        writeOutput(`User wins ${userWins} - ${computerWins}`);
    }
    else if ( computerWins > userWins){
        console.log( `Computer wins ${computerWins} - ${userWins}`);
        writeOutput(`Computer wins ${computerWins} - ${userWins}`);
    }
    else{
        console.log(`Its a tie ${userWins} - ${computerWins}`);
        writeOutput(`It's a tie ${userWins} - ${computerWins}`);
    }

}

function writeOutput(message){
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = message;
}

const handletooutput = document.querySelector("#output");
const playButtonHandle = document.querySelector("#playgame");
playButtonHandle.addEventListener("click", () => { game() });



