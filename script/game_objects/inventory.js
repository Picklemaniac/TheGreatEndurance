let inventory;

class Inventory {
    constructor() {
        this.inventoryContent = [];
        this.inventorySize = 20;
    }

    //Push an item to the inventory (parameter is the item you want to add)
    addItemToInventory(item) {
        this.inventoryContent.push(item)
    }

    //Remove an item from the inventory (parameter is the item you want to remove)
    removeItemFromInventory(item) {
        if (item === 0 || item === undefined) return;
        const index = this.inventoryContent.findIndex(x => x.name === item.name);
        if (index !== undefined) this.inventoryContent.splice(index, 1);
        this.displayInventory();
    }

    //Function to check if the inventory is full (return true if full, return false if not)
    checkInventoryFull(itemSize) {
        let inventoryStuffing = 0;
        for (let i = 0; i < this.inventoryContent.length; i++) {
            inventoryStuffing += this.inventoryContent[i].inv_space;
        }
        console.log(`Inventory is ${inventoryStuffing} van de ${this.inventorySize} gevuld`)
        return inventoryStuffing + itemSize > this.inventorySize;
    }

    //This function displays the current inventory to the player
    displayInventory() {
        //Initialize all the displays
        const weaponsDisplay = document.getElementById("weaponsDisplay");
        const foodsDisplay = document.getElementById("foodsDisplay");
        const drinksDisplay = document.getElementById("drinksDisplay");

        //Empty the current inventory displays
        weaponsDisplay.innerHTML = '<option value="0" disabled selected> Select weapon</option>';
        foodsDisplay.innerHTML = '<option value="0" disabled selected> Select food</option>';
        drinksDisplay.innerHTML = '<option value="0" disabled selected> Select drink</option>';

        //For each item in the current inventory display it to the right place
        for (let i = 0; i < this.inventoryContent.length ; i++) {
            let opt = document.createElement("option");
            opt.textContent = this.inventoryContent[i].name;
            opt.value = JSON.stringify(this.inventoryContent[i]);

            switch (this.inventoryContent[i].type) {
                case "food":
                    foodsDisplay.appendChild(opt);
                    break;
                case "drink":
                    drinksDisplay.appendChild(opt);
                    break;
                case "weapon":
                    weaponsDisplay.appendChild(opt);
                    break;
                default:
                    break;
            }
        }
        player.selectedItem = 0;
    }
}