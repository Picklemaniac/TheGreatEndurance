//This class is going to keep track of the game, dom events, and things will be initialized here

//Initialize the gameManager variable
let gameManager;

//Initialize all DOM elements for easy call access
const foodsDisplay = document.getElementById('foodsDisplay');
const drinksDisplay = document.getElementById('drinksDisplay');
const eatActionBtn = document.getElementById('eatActionBtn');
const drinkActionBtn = document.getElementById('drinkActionBtn');

const northBtn = document.getElementById("north");
const eastBtn = document.getElementById("east");
const southBtn = document.getElementById("south");
const westBtn = document.getElementById("west");

const invList = document.getElementById("inventoryItemsDisplay")
const itemNameDisplay = document.getElementById("selectedItemName");
const itemInfoDisplay = document.getElementById("selectedItemDescription");
const selectedItemStats = document.getElementById("selectedItemStats");

const inventoryEquipBtn = document.getElementById("inventoryEquipBtn");
const inventoryDiscardBtn = document.getElementById("inventoryDiscardBtn");
const inventoryEatBtn = document.getElementById("inventoryEatBtn");
const inventoryDrinkBtn = document.getElementById("inventoryDrinkBtn");

const invSizeDisplay = document.getElementById("invSizeDisplay");

class GameManager {
    //Starts the game
    gameStart() {
        player = new Player();
        inventory = new Inventory();
        map = new Map();
        combatActions = new CombatActions();

        this.initializeButtons();
        this.displayStats();
        this.displayControls();
    }


    //Initialize all the necessary buttons
    initializeButtons() {
        //Movement Controls
        northBtn.addEventListener("click", function () { player.moveOnMap(-1, 0); });
        eastBtn.addEventListener("click", function () { player.moveOnMap(0, 1); });
        southBtn.addEventListener("click", function () { player.moveOnMap(1, 0); });
        westBtn.addEventListener("click", function () { player.moveOnMap(0, -1); });

        //Quick select controlls
        drinksDisplay.addEventListener("change", function () { player.selectedItem = JSON.parse(this.value) });
        foodsDisplay.addEventListener("change", function () { player.selectedItem = JSON.parse(this.value) });
        eatActionBtn.addEventListener("click", function () { quickConsumeClick("food") });
        drinkActionBtn.addEventListener("click", function () { quickConsumeClick("drink") });

        //Inventory action controls
        inventoryEquipBtn.addEventListener("click", function () { equipClick() });
        inventoryEatBtn.addEventListener("click", function () { consumeClick() });
        inventoryDrinkBtn.addEventListener("click", function () { consumeClick() });
        inventoryDiscardBtn.addEventListener("click", function () { discardClick() });

        document.getElementById("startCombatBtn").addEventListener("click", function () { combatManager.startCombat() });

    }

    //This function displays the current player stats to the right location
    displayStats() {
        document.getElementById('healthStatDisplay').innerText = player.health
        document.getElementById('attackStatDisplay').innerText = player.prowess
        document.getElementById('thirstStatDisplay').innerText = player.thirst
        document.getElementById('hungerStatDisplay').innerText = player.hunger
        if (player.weaponEquiped !== null) document.getElementById('weaponEquippedDisplay').innerText = player.weaponEquiped.name;
        document.getElementById('staminaStatDisplay').innerText = `${player.stamina} / ${player.endurance}`;
    }

    displayEnemyStats(){
        document.getElementById('enemyStats').innerText = `
        ${currentEnemy.name}
        Health: ${currentEnemy.health}
        Stamina: ${currentEnemy.stamina}
        `
    }

    //This function displays the current inventory to the player
    //(Display to the quick select inventory and to the main inventory)
    displayInventory() {
        player.selectedItem = null;

        foodsDisplay.innerHTML = '<option value="0" disabled selected> Select food</option>';
        drinksDisplay.innerHTML = '<option value="0" disabled selected> Select drink</option>';
        invList.innerHTML = "";

        invSizeDisplay.innerText = `${inventory.checkInventoryWeight()} / ${inventory.inventorySize} `;

        //For each item in the current inventory display it to the right place
        for (let i = 0; i < inventory.inventoryContent.length ; i++) {
            let opt = document.createElement("option");
            opt.textContent = inventory.inventoryContent[i].name;
            opt.value = JSON.stringify(inventory.inventoryContent[i]);
            switch (inventory.inventoryContent[i].type) {
                case "food":
                    foodsDisplay.appendChild(opt);
                    break;
                case "drink":
                    drinksDisplay.appendChild(opt);
                    break;
                default:
                    break;
            }


            let invItem = document.createElement("li")
            invItem.innerHTML = `${inventory.inventoryContent[i].name}`;
            invItem.addEventListener('click', function () {
                player.selectedItem = inventory.inventoryContent[i];
                gameManager.displayItem()
            });
            invList.append(invItem)
        }
    }

    //Displays information about the item and the things you can do with it
    displayItem() {
        //Remove current actions (Except discard, because you can throw away all items. Exceptions may be applied in the future.)
        inventoryEquipBtn.style.display = "none"
        inventoryDrinkBtn.style.display = "none"
        inventoryEatBtn.style.display = "none"
        inventoryDiscardBtn.style.display = ""

        if (player.selectedItem === null || player.selectedItem === undefined) {
            itemNameDisplay.innerText = '';
            itemInfoDisplay.innerText = '';
            return;
        }

        //Display Item info
        itemNameDisplay.innerText = player.selectedItem.name;
        itemInfoDisplay.innerText = player.selectedItem.description;


        //Display avaiable actions
        switch (player.selectedItem.type) {
            case "weapon":
            case "armor":
                inventoryEquipBtn.style.display = ""
                break;
            case "food":
                inventoryEatBtn.style.display = ""
                break;
            case "drink":
                inventoryDrinkBtn.style.display = ""
                break;
            case "junk":
                break;
        }
    }

    //This function enables or disables the player movement controls based on which direction he can currently move in.
    displayControls() {
        //First disable all buttons
        northBtn.disabled = true;
        eastBtn.disabled = true;
        southBtn.disabled = true;
        westBtn.disabled = true;

        //Use the neighbour function to check the 4 surrounding tiles of the player
        let surrounding = this.neighbours(map.grid, player.ylocation, player.xlocation);

        //[0] = east, [1] = south, [2] = west, [3] = north
        if (surrounding[0] > 0) {
            eastBtn.disabled = false;
        }
        if (surrounding[1] > 0) {
            southBtn.disabled = false;
        }
        if (surrounding[2] > 0) {
            westBtn.disabled = false;
        }
        if (surrounding[3] > 0) {
            northBtn.disabled = false;
        }
    }

    //This functions checks the tiles neighbouring the player on the map
    //This was ripped from Stackoverflow. No idea how it works
    neighbours(arr, m, n) {
        let v = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        return v.filter(([h, j]) => h + m >= 0 && h + m < arr.length && j + n >= 0 && j + n < arr[0].length)
            .map(([h, j]) => arr[h + m][j + n])
    }
}

//All DOM functions

function equipClick() {
    if (player.selectedItem === 0 || player.selectedItem === null) return;
    player.equip(player.selectedItem);
    gameManager.displayStats();
}

function discardClick() {
    if (player.selectedItem === 0 || player.selectedItem === null) return;
    if (confirm(`Are you sure you want to discard ${player.selectedItem.name}?`)) {
        inventory.removeItemFromInventory(player.selectedItem);
        gameManager.displayItem()
    }
}

function consumeClick() {
    if (player.selectedItem === 0 || player.selectedItem === null) return;
    player.consume(player.selectedItem)
    gameManager.displayStats();
    gameManager.displayItem()
}

function quickConsumeClick(type) {
    switch (type) {
        case "food":
            if (foodsDisplay.value !== 0) player.consume(JSON.parse(foodsDisplay.value));
            break;
        case "drink":
            if (drinksDisplay.value !== 0) player.consume(JSON.parse(drinksDisplay.value));
            break;
        default:
            break;
    }
    gameManager.displayStats();
    gameManager.displayItem();
}