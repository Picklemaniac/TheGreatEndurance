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

        this.anatomy = enemy.anatomy;

        this.equipLoad = 0;

        //Combat actions
        this.offensiveCombatActions = [];
        this.defensiveCombatActions = [];

        //Combat management
        this.nextAction = null;
        this.nextActionType = null;
        this.defensiveStance = null;
    }

    //DONT EVEN DARE QUESTION THIS FUNCTION. It returns all possible actions the enemy can do right now.
    possibleActions() {
        let testarray = [];
        //for each part of anatomy in the array
        for (let i = 0; i < this.anatomy.length; i++) {

            //check if it has a piece of equipment
            if (this.anatomy[i].weapon !== null) {
                let weapon = items.equipment.find(obj => obj.name.toLowerCase() === this.anatomy[i].weapon.toLowerCase())
                console.log(weapon)
                weapon.offensive.forEach(element => {
                    let actionInfo = combat_actions.offensive.find(obj => obj.name.toLowerCase() === element.toLowerCase())
                    let offensiveAction = {};
                    offensiveAction["action_using"] = weapon.name;
                    offensiveAction["name"] = actionInfo.name;
                    offensiveAction["stamina_usage"] = actionInfo.stamina_usage;
                    offensiveAction["damage"] = actionInfo.damage;
                    this.offensiveCombatActions.push(offensiveAction);
                })

            }

            if (this.anatomy[i].armor !== null) {
                let armor = items.equipment.find(obj => obj.name.toLowerCase() === this.anatomy[i].armor.toLowerCase())
                console.log(armor)
                armor.offensive.forEach(element => {
                    let actionInfo = combat_actions.offensive.find(obj => obj.name.toLowerCase() === element.toLowerCase())
                    let offensiveAction = {};
                    offensiveAction["action_using"] = armor.name;
                    offensiveAction["name"] = actionInfo.name;
                    offensiveAction["stamina_usage"] = actionInfo.stamina_usage;
                    offensiveAction["damage"] = actionInfo.damage;
                    this.offensiveCombatActions.push(offensiveAction);
                })
            }

            if (this.anatomy[i].offensive.length !== 0) {
                this.anatomy[i].offensive.forEach(element => {
                    //Yes, I know this is shit. I tried to use array.push but it fucks up every single time
                    let actionInfo = combat_actions.offensive.find(obj => obj.name.toLowerCase() === element.toLowerCase())
                    let offensiveAction = {};
                    offensiveAction["action_using"] = this.anatomy[i].name;
                    offensiveAction["name"] = actionInfo.name;
                    offensiveAction["stamina_usage"] = actionInfo.stamina_usage;
                    offensiveAction["damage"] = actionInfo.damage;
                    this.offensiveCombatActions.push(offensiveAction);
                })
            }

            if (this.anatomy[i].defensive.length !== 0) {
                this.anatomy[i].defensive.forEach(element => {
                    //Yes, I know this is shit. I tried to use array.push but it fucks up every single time
                    let actionInfo = combat_actions.defensive.find(obj => obj.name.toLowerCase() === element.toLowerCase())
                    let defensiveAction = {};
                    defensiveAction["action_using"] = this.anatomy[i].name;
                    defensiveAction["name"] = actionInfo.name;
                    defensiveAction["stamina_usage"] = actionInfo.stamina_usage;
                    defensiveAction["blocks"] = actionInfo.blocks;
                    this.defensiveCombatActions.push(defensiveAction);
                })
            }
        }

        // console.log('--------------------------')
        // console.log(this.offensiveCombatActions)
        // console.log('--------------------------')
        // console.log(this.defensiveCombatActions)
    }


    randomCombatAction(actionType, actionTypeArray) {
        let randomPossibleAction = actionType[Math.floor(Math.random() * actionType.length)];
        // console.log(randomPossibleAction)
        return randomPossibleAction;
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
                                combat.offensive(currentEnemy, player, this.nextAction);
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
