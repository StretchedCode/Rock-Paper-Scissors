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
}

function playRound(playerSelection, computerSelection){

    computerSelection = getComputerChoice();
    playerSelection = prompt('What would you like to play?').toLowerCase();
}