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

    let playerScore = 0;
    let cpuScore = 0;
    let draw = 0;

function game(results){

    if (results == 0){
        cpuScore += 1;
    }
    else if (results == 1){
        playerScore += 1;
    }
    else{
        draw += 1;
    }    
    resultDiv.textContent = (`Currently, the cpu score is: ${cpuScore}.\nThe player score is: ${playerScore}.\n${draw} draw's have occurred.`);
    body.appendChild(resultDiv);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(buttons => {
    
    buttons.addEventListener('click', function(e){

        game(playRound(this.className));
    });

});

const body = document.querySelector('body');
const resultDiv = document.createElement('div');