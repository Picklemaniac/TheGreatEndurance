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
        gameManager.displayInventory();
    }

    //Function to calculate the total weight of the inventory
    checkInventoryWeight() {
        let invWeight = 0;
        for (let i = 0; i < this.inventoryContent.length; i++) {
            invWeight += this.inventoryContent[i].inv_space;
        }
        return invWeight;
    }

    //Function to check if a certain item you want to pick up fits in the inventory or not
    checkInventoryFull(itemSize) {
        let inventoryStuffing = 0;
        for (let i = 0; i < this.inventoryContent.length; i++) {
            inventoryStuffing += this.inventoryContent[i].inv_space;
        }
        return inventoryStuffing + itemSize > this.inventorySize;
    }
}