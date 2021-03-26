
/* for([initial expression]; [condition]; [increment expression]) {
    statement
 } */

var fightOrSkip = function(){
    var promptFight = window.prompt("Would you like to 'FIGHT' or 'SKIP' this battle?");
    
    //conditional recursive function call
    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    //if player chooses skip, confirm then stop the loop
    if (promptFight === "skip"){
         //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        //if yes, leave fight
        if (confirmSkip){
            window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            return true;
          }       
    }
    return false;
};


var fight = function(enemy){
    var isPlayerTurn = true;
    if (Math.random() > 0.5){
        isPlayerTurn = false;
    }

    while(enemy.health > 0 && playerInfo.health > 0){   
        if(isPlayerTurn){
            if (fightOrSkip()){
                break;
            }
            //subtract the value of 'playerInfo.attack' from the value of 'enemy.health'
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            //log a resulting message to the console so we know it worked
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            )

            //check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

        //player gets attacked first
        } else {
            //subtract the value of 'enemy.attack' from the value of 'playerInfo.health'
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            //log a resulting message to the console so we know it worked
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            //check player's health
            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break;
            } 
            else {
                window.alert (playerInfo.name + " still has " + playerInfo.health + " health left.");
            } 
        }
        //switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
};

//function to start a new game
var startGame = function(){
    //reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++){
        console.log(playerInfo);
        //lets players know what round they are in
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
            //picks new enemies to fight
            var pickedEnemyObj = enemyInfo[i];
            //resets enemy health before starting a new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            console.log(enemyInfo[i]);
            //pass the pickedenemy.name variables value into the fight function , where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);    
             //if we're not at the last enemy in the array  
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                //ask if player wants to enter shop
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                //if yes, take them to the store
                if (storeConfirm){
                    shop();
                }
             } 
        } else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }   
    }
    //play again
    endGame();
};

var endGame = function(){
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

//shop
var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to 1. REFILL your health, 2. UPGRADE your attack, or 3. LEAVE the store? Please enter '1', '2', or '3' to make a choice."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt){
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
           playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again");
            shop();
            break;
    }
};

//function to creat random numeric value
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function(){
    var name = "";
    while (name === "" || name === null){
       name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
    
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10, 
    reset: function(){
        this.money = 10;
        this.health = 100;
        this.attack = 10;
    }, 
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }, 
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else{
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android", 
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


//start the game when the page loads
startGame();