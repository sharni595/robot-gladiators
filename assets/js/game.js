var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/* for([initial expression]; [condition]; [increment expression]) {
    statement
 } */


var fight = function(enemyName){

    while(enemyHealth > 0 && playerHealth > 0){   
    
        //fight or skip?
        var promptFight = window.prompt("Would you like to 'FIGHT' or 'SKIP' this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes, leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } 
            //if no
            else{
                fight();
            }
        }

        //if player chooses to fight, then fight
        if (promptFight === "FIGHT" || promptFight === "fight") {
            //subtract the value of 'playerAttack' from the value of 'enemyHealth'
            enemyHealth = enemyHealth - playerAttack;
            //log a resulting message to the console so we know it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            )

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //subtract the value of 'enemyAttack' from the value of 'playerHealth'
            playerHealth = playerHealth - enemyAttack;
            //,log a resulting message to the console so we know it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            } 
            else {
                window.alert (playerName + " still has " + playerHealth + " health left.");
            } 
        }   else {
            window.alert("You need to choose a valid option. Try again!")
            }
    }
};

//function to start a new game
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++){
        //lets players know what round they are in
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
            //picks new enemies to fight
            var pickedEnemyName = enemyNames[i];
            //resets enemy health before starting a new fight
            enemyHealth = 50;
            //pass the pickedEnemyName variables value into the fight function , where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);        
        } else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }   
    }
    //play again
    endGame();
};

var endGame = function(){
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in the battle.");
    }
    //would you like to play agin?
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


//start the game when the page loads
startGame();