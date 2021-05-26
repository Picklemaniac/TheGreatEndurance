let combatManager;

class CombatManager {

    constructor() {
        this.enemyTypes = [
            {min: 0, max: 0.2}, //Pest 20%
            {min: 0.2, max: 0.5}, // Weak 30%
            {min: 0.5, max: 0.8}, // Normal 30%
            {min: 0.8, max: 0.95}, // Strong 15%
            {min: 0.95, max: Infinity} // Beast 5%
        ]
    }

    //Starts a combat instance
    startCombat() {
        this.pullRandomEnemy();
        this.combatLoop();
        this.displayCombatChoices();
    }

    offensiveAction() {
        console.log("attack")
    }

    defensiveAction() {
        console.log("defend")
    }

    //Runs the main combat loop
    //Displays the player and enemy stats live
    //Checks if the player or enemy is dead
    combatLoop() {
        let combatLoopInterval = setInterval(() => {
            gameManager.displayStats();
            gameManager.displayEnemyStats();

            if (currentEnemy.health <= 0) {
                gameManager.displayStats();
                document.getElementById('enemyStats').innerText = "";
                clearInterval(combatLoopInterval);
                clearInterval(staminaRegenInterval);
            }

        }, 1);

        //Regenerates the stamina of the player and enemy every second
        let staminaRegenInterval = setInterval(() => {
            currentEnemy.regenStamina();
            player.regenStamina();
            currentEnemy.combatBehaviour();
        }, 1000)

    }

    pullRandomEnemy() {
        let enemyType = Math.random();
        const randomEnemy = this.enemyTypes.findIndex(rarity => rarity.min <= enemyType && rarity.max > enemyType);
        let possibleEnemies;

        switch (randomEnemy){
            case 0:
                possibleEnemies = enemies.pest;
                break;
            case 1:
                possibleEnemies = enemies.weak;
                break;
            case 2:
                possibleEnemies = enemies.normal;
                break;
            case 3:
                possibleEnemies = enemies.strong;
                break;
            case 4:
                possibleEnemies = enemies.beast;
                break;
        }

        let generatedEnemy = possibleEnemies[Math.floor(Math.random() * possibleEnemies.length)];

        console.log(`
        Generated enemy: ${JSON.stringify(generatedEnemy)}
        `)

        currentEnemy = new Enemy(generatedEnemy);
    }

    displayCombatChoices() {
        document.getElementById("startCombatBtn").style.display = "none";

        let attackCombatAction = document.createElement("button");
        let defendCombatAction = document.createElement("button");
        let evadeCombatAction = document.createElement("button");

        attackCombatAction.innerText = "Attack";
        defendCombatAction.innerText = "Defend";
        evadeCombatAction.innerText = "Evade";

        attackCombatAction.className = "navBtnStyling";
        defendCombatAction.className = "navBtnStyling";
        evadeCombatAction.className = "navBtnStyling";

        attackCombatAction.addEventListener("click", function (){
            if (player.stamina > 20) {
                currentEnemy.health -= player.attack;
                player.stamina -= 20
            }
        });

        defendCombatAction.addEventListener("click", function (){

        });

        evadeCombatAction.addEventListener("click", function (){

        });

        //Default combat actions
        document.getElementById("currentActionButtons").append(attackCombatAction);
        document.getElementById("currentActionButtons").append(defendCombatAction);
        document.getElementById("currentActionButtons").append(evadeCombatAction);

        //Combat actions based on equipment go here
    }
}