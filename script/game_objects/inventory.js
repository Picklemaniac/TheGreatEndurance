class Inventory {
    constructor() {
        this.inventoryContent = [];
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

        //create option element in advance

        //For each item in the current inventory
        //Display it to the right place
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
    }
}