let combatManager;

class CombatManager {

    //Starts a combat instance
    startCombat() {
        currentEnemy = new Enemy('skeleton', 20, 5, 50, 2, 100);

        let attackButton = document.createElement('button');
        attackButton.innerText = 'attack';
        attackButton.id = 'attackButton';
        attackButton.addEventListener('click', function () {
            player.battleAction(0);
        });
        document.getElementById('combatField').append(attackButton);

        console.log(currentEnemy.name);

        gameManager.displayEnemyStats();

        //Update the player and enemy stats live when combat is enabled.
        let combatManager = setInterval(() => {
            gameManager.displayStats();
            gameManager.displayEnemyStats();

            if (currentEnemy.checkEnemyDeath() === true) {

            }

        }, 100);

        //Slowly regen the stamina of both the player and the enemy. This is based on their stats
        let staminaRegen = setInterval(() => {
            player.regenStamina();
        }, 1000);

        //Have the enemy attack and use it's own stamina. Should be mostly random for now
        let enemyCombat = setInterval(() => {

        });

        // let playerCombat = setInterval(() => {
        //     if (player.stamina < player.maxStamina) {
        //         if (currentEnemy.checkEnemyDeath() === false) {
        //             player.regenStamina();
        //         }
        //         else {
        //             this.clearInterval(playerCombat);
        //         }
        //     }
        // }, 4000);
        // // enemy
        // let enemyCombat = setInterval(() => {
        //     if (currentEnemy.checkEnemyDeath() === false) {
        //         currentEnemy.battleAction();
        //     }
        //     else {
        //         console.log("Can't attack, I am dead");
        //         document.getElementById('enemyStats').innerText = ''
        //         this.clearInterval(enemyCombat);
        //     }
        // }, 5000);
    }
}