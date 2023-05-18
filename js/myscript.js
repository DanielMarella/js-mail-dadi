




const ulElement = document.querySelector('ul');
let  DiceGame = roundNumber(1,6);
function roundNumber(min, max) {
    let computerNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
    document.getElementById('computer').innerHTML = ('computer: ' +computerNumber);
    let userNumber = (Math.floor(Math.random() * (max - min + 1) ) + min);
    document.getElementById('user').innerHTML = ('user: ' + userNumber);
    console.log('computer: ' + computerNumber);
    console.log('user: ' + userNumber);
        if (computerNumber > userNumber){
            console.log("computer vince");
            document.getElementById('risultato').innerHTML = ('computer vince');
        }
        else if (computerNumber < userNumber){
            console.log("Ha vinto l'utente");
            document.getElementById('risultato').innerHTML = ('utente vince');
        }
        else{
            console.log("Pareggio!");
            document.getElementById('risultato').innerHTML = ('Pareggio!');

        }
    }


//*************************************************************************************



const emailList = ["lupolucio@melevisione.it", "giovannimuciacia@artattak.com", "vittoriosgarbi@capra.it", "magootelma@magia.it", "fabriziocorona@foto.it", "antoniozequila@maipiu.org"];

const emailInserita = prompt('inserisci la tua mail');

isMailFound = false;

    for (let i = 0; i < emailList.length; i++) {
        if (emailList[i] === emailInserita) {
        isMailFound = true;
        }
    }


    if (isMailFound) {
    console.log("L'indirizzo email è presente nell'array.");
}
    else {
    console.log("L'indirizzo email non è presente nell'array.");
}



