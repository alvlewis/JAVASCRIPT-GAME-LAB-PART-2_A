let grantPoints = 10;
let userPoints = 40;

let userWins = 0;

function getDamage() {  
    return Math.floor(Math.random() * 5);
}



alert('Game Directions: R-Click, choose Inspect, open Console, Type startGame()')


// startGame()

// START GAME
function startGame() {
    let game = prompt('Would you like to play?', 'yes/no'); 
    if(game === 'yes') {
    startCombat();       
    }
}


// START COMBAT
function startCombat() {
    const name = prompt('What is your name?' , 'Name Here');
    
// WHILE LOOP


while(userWins < 3 && userPoints > 0) {
    let playAgain = prompt('Would you like to attack or quit?', 'Enter attack/quit');
    if(playAgain == 'attack') {

    
    grantPoints -= getDamage();
    userPoints -= getDamage();
  
    if(grantPoints <= 0){
        userWins++;
        grantPoints = 10;
    } 
    console.log(name + ' has ' + userPoints + ' points');
    console.log('Grant has ' + grantPoints + ' points ');

    } else {
        return document.write("*****   Have a Great Day " + name + " !!   *****")
        } 
    
}


if(userWins === 3) {
    console.log(name + ' wins! ');
    }


}



    

 


