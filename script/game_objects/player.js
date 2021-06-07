let player;

class Player {
    //Initialize the player location and stats
    constructor() {
        //Location and mapping
        this.ylocation = 2;
        this.xlocation = 3;

        this.name = "You"

        //General Stats
        this.health = 100;
        this.stamina = 50;
        this.endurance = 80;

        this.prowess = 3;
        this.strength = 5;

        this.dexterity = 5;

        this.thirst = 50;
        this.hunger = 50;

        this.offensiveCombatActions = [];
        this.defensiveCombatActions = [];

        //Equipment
        this.weaponEquiped = null;
        this.armorEquiped = null;
        this.equipLoad = 3;


        //Combat management
        this.defensiveStance = null;
        this.anatomy = [
            {name: 'head', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'torso', health: 60, weapon: null, armor: null, offensive : [], defensive: ['Evade']},
            {name: 'left arm', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right arm', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'left hand', health: 60, weapon: 'iron blade', armor: null, offensive : [], defensive: []},
            {name: 'right hand', health: 60, weapon: null, armor: null, offensive : ['Punch'], defensive: []},
            {name: 'left leg', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right leg', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'left foot', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right foot', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
        ]

        //Misc
        this.selectedItem = null;
    }

    possibleActions() {

        this.offensiveCombatActions = [];
        this.defensiveCombatActions = [];

        for (let i = 0; i < this.anatomy.length; i++) {

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
                    offensiveAction["weapon_attack"] = weapon.attack;
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

            if (this.anatomy[i].offensive !== null) {
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

            if (this.anatomy[i].defensive !== null) {
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

        console.log("Possible player actions:")
        console.log(this.offensiveCombatActions);
        console.log(this.defensiveCombatActions);
    }

    //Lets the player consume an item (changes the given stats and removes the consumed item)
    consume(item) {
        if (item === 0 || item === undefined) return;
        this.health += item.stats[0];
        this.prowess += item.stats[1];
        this.thirst += item.stats[2];
        this.hunger += item.stats[3];

        inventory.removeItemFromInventory(item);
        gameManager.displayInventory();

    }

    equip(item) {
        if (item === 0 || item === undefined) return;
        switch (item.type) {
            case "weapon":
                this.weaponEquiped = item;
                break;
            case "armor":
                this.armorEquiped = item;
                break;
        }
    }

    moveOnMap(y, x) {
        this.ylocation += y;
        this.xlocation += x;
        gameManager.displayControls();
        map.renderMap();
        switch (map.grid[this.ylocation][this.xlocation]) {
            case 2:
                let item = generateRoomLoot();

                if (inventory.checkInventoryFull(item.inv_space)) {
                    console.log(`Item does not fit in inventory; size: ${item.inv_space}`)
                }
                else {
                    inventory.addItemToInventory(item);
                    map.grid[this.ylocation][this.xlocation] = 1;
                }
                console.log(inventory.inventoryContent)
                console.log(inventory)
                gameManager.displayInventory();
                break;
        }
    }
}