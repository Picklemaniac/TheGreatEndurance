let currentEnemy;

class Enemy{
    constructor(enemy){

        //General stats
        this.name = enemy.name;

        this.health = enemy.stats[0];

        this.stamina = enemy.stats[1];
        this.endurance = enemy.stats[2];

        this.prowess = enemy.stats[3];
        this.strength = enemy.stats[4];


        //Combat actions
        this.offensiveCombatActions = enemy.offensive;
        this.defensiveCombatActions = enemy.defensive;
        this.specialCombatActions = enemy.special;

        //Combat management
        this.nextAction = null;
        this.nextActionType = null;
        this.defensiveStance = null;
    }

    randomCombatAction(actionType, actionTypeArray) {
        let randomPossibleAction = actionType[Math.floor(Math.random() * actionType.length)];
        return actionTypeArray.find(obj => obj.name.toLowerCase() === randomPossibleAction.toLowerCase());
    }

    combatBehaviour() {
        if (this.nextAction === null || this.nextAction === undefined) {
            let randomActionType = Math.floor(Math.random() * 2);
            switch (randomActionType) {
                case 0:
                    if (this.offensiveCombatActions === []) return;
                    this.nextAction = this.randomCombatAction(this.offensiveCombatActions, combat_actions.offensive);
                    this.nextActionType = 'offensive'
                    break;
                case 1:
                    if (this.defensiveCombatActions === []) return;
                    this.nextAction = this.randomCombatAction(this.defensiveCombatActions, combat_actions.defensive);
                    this.nextActionType = 'defensive'
                    break;
                case 2:
                    if (this.specialCombatActions === []) return;
                    break;
            }
        }
        else {
            //Wait until you have enough stamina to do chosen combat action
            if (this.stamina >= combat.staminaDrain(currentEnemy, this.nextAction.stamina_usage)) {
                //If have enough stamina
                //Decide if you want to do it or not.
                if (Math.random() < 0.7) {
                    //If yes, do action
                    //Drain stamina
                        console.log(this.nextAction)

                        switch (this.nextActionType){
                            case 'offensive':
                                combat.offensive(player, currentEnemy, this.nextAction);
                                break;
                            case 'defensive':
                                combat.defensive(currentEnemy, this.nextAction);
                                break;
                        }
                }
            }
                //Choose a new action
                this.nextAction = null;
                this.nextActionType = null;
        }
    }
}
