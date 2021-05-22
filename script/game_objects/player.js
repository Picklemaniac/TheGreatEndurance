let player;

class Player {
    //Initialize the player location and stats
    constructor() {
        //Location and mapping
        this.ylocation = 2;
        this.xlocation = 3;

        //General Stats
        this.health = 20;
        this.attack = 3;
        this.thirst = 50;
        this.hunger = 50;

        this.stamina = 100;
        this.staminaRegen = 15;
        this.maxStamina = 100;

        //Equipment
        this.weaponEquiped = null;

        //Misc
        this.selectedItem = null;
    }

    //Lets the player consume an item (changes the given stats and removes the consumed item)
    consume(item) {
        if (item === 0 || item === undefined) return;
        this.health += item.stats[0];
        this.attack += item.stats[1];
        this.thirst += item.stats[2];
        this.hunger += item.stats[3];
        inventory.removeItemFromInventory(item);
        inventory.displayInventory();
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
                inventory.displayInventory();
                break;
        }
    }

    battleAction(actionType) {
        switch (actionType) {
            case 0:
                currentEnemy.health -= this.attack;
                this.stamina -= 20;
                
                if (currentEnemy.health <= this.attack) {
                }
                if (currentEnemy.health >= this.attack) {
                    console.log(currentEnemy.health);
                    
                }
                break;

            case 1:

                break;
            case 2:

                break;
        }
    }

    regenStamina() {
        this.stamina += this.staminaRegen;
        
    }
}