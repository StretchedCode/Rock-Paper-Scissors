function getComputerChoice (){

    let choice = Math.floor(Math.random() * 3) + 1;
    let result;

    if (choice == 1){
        result = 'rock';
    }
    else if(choice == 2){
        result = 'paper';
    }
    else{
        result = 'scissors'
    }
    return result;
}

function playRound(playerSelection, computerSelection){

    computerSelection = getComputerChoice();
    playerSelection = prompt('What would you like to play?').toLowerCase();

    let matchPoint;

    if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper')){
        matchPoint = 0;
    }

    else if ((computerSelection == 'scissors' && playerSelection == 'rock') || (computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors')){
        matchPoint = 1;
    }
    else{
        matchPoint = 2;
    }
    return matchPoint;
}
playRound();