let player;

class Player {
    //Initialize the player location and stats
    constructor() {
        //Location and mapping
        this.ylocation = 2;
        this.xlocation = 3;

        //General Stats
        this.health = 20;
        this.stamina = 50;
        this.endurance = 80;

        this.prowess = 3;
        this.strength = 5;

        this.dexterity = 5;

        this.thirst = 50;
        this.hunger = 50;

        //Equipment
        this.weaponEquiped = { type: "weapon", rarity: 0, inv_space: 0, weight: 0, attack: 1, name: "Fists", description: ""};
        this.armorEquiped = null;
        this.equipLoad = 3;


        //Combat management
        this.defensiveStance = null;
        this.anatomy = [
            {name: 'head', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'torso', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'left arm', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right arm', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'left hand', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right hand', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'left leg', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right leg', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'left foot', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
            {name: 'right foot', health: 60, weapon: null, armor: null, offensive : [], defensive: []},
        ]

        //Misc
        this.selectedItem = null;
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