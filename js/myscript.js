




let  DiceGame = roundNumber(1,6);
function roundNumber(min, max) {
    let computerNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
    let userNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
    console.log(computerNumber);
    console.log(userNumber);
    if (computerNumber > userNumber){
        console.log('ha vinto il computer');
    }
    else{
        console.log("ha vinto l'utente");
    }
}