

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
            console.log('ha vinto il computer');
            alert('ha vinto il computer!')
        }
        else if (computerNumber < userNumber){
            console.log("Ha vinto l'utente");
            alert("Ha vinto l'utente");
        }
        else{
            alert('Pareggio!!!')
        }
    }





