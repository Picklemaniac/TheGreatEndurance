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

        let combatManager = setInterval(() => {
            gameManager.displayStats();
            gameManager.displayEnemyStats();
        }, 100);

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