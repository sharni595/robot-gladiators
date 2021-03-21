var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    //fight or skip?
    var promptFight = window.prompt("Would you like to 'FIGHT' or 'SKIP' this battle? Enter 'FIGHT' or 'SKIP' to choose.");

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
        } 
        else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    //player chooses to skip    
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        window.alert(playerName + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        //if yes, leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
        } 
        //if no
        else{
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }


};

fight();