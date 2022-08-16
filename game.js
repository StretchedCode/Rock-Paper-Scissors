function getComputerChoice (){

    let choice = Math.floor(Math.random() * 2) + 1;
    return choice;
}
console.log(getComputerChoice());