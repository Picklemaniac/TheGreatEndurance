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
        this.displayControls();
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

    //This functions checks the tiles neighbouring the player on the map
    //This was ripped from Stackoverflow. No idea how it works
    neighbours(arr, m, n) {
        // define what a neighbor is
        let v = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        // filter edges & map
        return v.filter(([h, j]) => h + m >= 0 && h + m < arr.length && j + n >= 0 && j + n < arr[0].length)
            .map(([h, j]) => arr[h + m][j + n])
    }

    //This function enables or disables the player movement controls based on which direction he can currently move in.
    displayControls() {
        //First disable all buttons
        document.getElementById('east').disabled = true;
        document.getElementById('north').disabled = true;
        document.getElementById('west').disabled = true;
        document.getElementById('south').disabled = true;

        //Use the neighbour function to check the 4 surrounding tiles of the player
        let surrounding = this.neighbours(map.grid, this.ylocation, this.xlocation);

        //[0] = east, [1] = south, [2] = west, [3] = north
        if (surrounding[0] > 0) {
            document.getElementById('east').disabled = false;
        }
        if (surrounding[1] > 0) {
            document.getElementById('south').disabled = false;
        }
        if (surrounding[2] > 0) {
            document.getElementById('west').disabled = false;
        }
        if (surrounding[3] > 0) {
            document.getElementById('north').disabled = false;
        }
    }

    //This function displays the current player stats to the right location
    displayStats() {
        document.getElementById('healthStatDisplay').innerText = player.health
        document.getElementById('attackStatDisplay').innerText = player.attack
        document.getElementById('thirstStatDisplay').innerText = player.thirst
        document.getElementById('hungerStatDisplay').innerText = player.hunger
        document.getElementById('weaponEquippedDisplay').innerText = player.weaponEquiped;
    }
}