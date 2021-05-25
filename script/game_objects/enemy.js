let currentEnemy;

class Enemy{
    constructor(enemy){
        this.name = enemy.name;
        this.health = enemy.stats[0];
        this.attack = enemy.stats[1];
        this.stamina = enemy.stats[2];
        this.staminaRegen = enemy.stats[3];
        this.maxStamina = enemy.stats[4];

        this.offensiveCombatActions = enemy.offensive;
        this.defensiveCombatActions = enemy.defensive;
        this.specialCombatActions = enemy.special;

        this.nextAction = null;
    }

    regenStamina() {
        if (this.stamina < this.maxStamina) {
            this.stamina += this.staminaRegen;
        }
    }

    randomCombatAction(actionType, actionTypeArray) {
        let randomPossibleAction = actionType[Math.floor(Math.random() * actionType.length)];
        return actionTypeArray.find(obj => obj.id === randomPossibleAction);
    }

    combatBehaviour() {
        if (this.nextAction === null) {
            let randomActionType = Math.floor(Math.random() * 2);
            switch (randomActionType) {
                case 0:
                    if (this.offensiveCombatActions === []) return;
                    this.nextAction = this.randomCombatAction(this.offensiveCombatActions, combat_actions.offensive);
                    break;
                case 1:
                    if (this.defensiveCombatActions === []) return;
                    // this.nextAction = this.randomCombatAction(this.defensiveCombatActions, combat_actions.defensive);
                    break;
                case 2:
                    if (this.specialCombatActions === []) return;
                    break;
            }
        }
        else {
            console.log(this.nextAction);
            //Wait until you have enough stamina to do chosen combat action
            if (this.stamina >= this.nextAction.stamina_usage) {
                //If have enough stamina
                //Decide if you want to do it or not.
                if (Math.random() < 0.5) {
                    //If yes, do action
                    //Drain stamina
                    this.offensive();
                }
                //Choose a new action
                this.nextAction = null;
            }
        }
    }

    offensive() {
        player.health -= Math.floor(Math.random() * (this.nextAction.damage[1] - this.nextAction.damage[0] + 1)) + this.nextAction.damage[0]
        this.stamina -= this.nextAction.stamina_usage;
    }

}
