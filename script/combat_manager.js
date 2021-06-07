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
            currentEnemy.combatBehaviour();

            combat.staminaGain(currentEnemy);
            combat.staminaGain(player);
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

        currentEnemy = new Enemy(generatedEnemy);
        currentEnemy.possibleActions();
    }

    displayCombatChoices() {
        player.possibleActions()

        document.getElementById("currentActionButtons").innerHTML = "";

        //Show all offensive actions
        for (let i = 0; i < player.offensiveCombatActions.length; i++) {
            let offensiveAction = document.createElement("button");
            offensiveAction.innerText = player.offensiveCombatActions[i].name;
            offensiveAction.className = "navBtnStyling";
            offensiveAction.addEventListener("click", function (){
                combat.offensive(player, currentEnemy, player.offensiveCombatActions[i]);
            })
            document.getElementById("currentActionButtons").append(offensiveAction);
        }

        //Show all defensive actions
        for (let i = 0; i < player.defensiveCombatActions.length; i++) {
            let defensiveAction = document.createElement("button");
            defensiveAction.innerText = player.defensiveCombatActions[i].name;
            defensiveAction.className = "navBtnStyling";
            defensiveAction.addEventListener("click", function (){
                combat.defensive(player, player.defensiveCombatActions[i]);
            })
            document.getElementById("currentActionButtons").append(defensiveAction);
        }
    }

    displayCombatText(text) {
        let textDisplay = document.createElement('p');
        textDisplay.innerHTML = text
        document.getElementById('combatText').append(textDisplay);
        setTimeout(function () {
            document.getElementById('combatText').removeChild(textDisplay);
            textDisplay.className = 'historyParagraph';
            document.getElementById('historyText').append(textDisplay);
        }, 1500)
    }
}