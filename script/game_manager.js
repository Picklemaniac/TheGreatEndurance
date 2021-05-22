//This class is going to keep track of the game, dom events, and things will be initialized here

//Initialize the gameManager variable
let gameManager;

//Initialize all DOM elements for easy call access
const weaponsDisplay = document.getElementById('weaponsDisplay');
const foodsDisplay = document.getElementById('foodsDisplay');
const drinksDisplay = document.getElementById('drinksDisplay');

const eatActionBtn = document.getElementById('eatActionBtn');
const drinkActionBtn = document.getElementById('drinkActionBtn');
const equipActionBtn = document.getElementById('equipActionBtn');
const discardActionBtn = document.getElementById('discardActionBtn');

const northBtn = document.getElementById("north");
const eastBtn = document.getElementById("east");
const southBtn = document.getElementById("south");
const westBtn = document.getElementById("west");


class GameManager {
    //Starts the game
    gameStart() {
        player = new Player();
        inventory = new Inventory();
        map = new Map();

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

        //Management Controlls
        drinksDisplay.addEventListener("change", function () { selectItem("drink") });
        foodsDisplay.addEventListener("change", function () { selectItem("food") });
        weaponsDisplay.addEventListener("change", function () { selectItem("weapon") });

        //Action controls
        eatActionBtn.addEventListener("click", function () { consumeClick("food") });
        drinkActionBtn.addEventListener("click", function () { consumeClick("drink") });
        equipActionBtn.addEventListener("click", function () { alert("Nothing here yet whoops") });
        discardActionBtn.addEventListener("click", function () { discardClick() });
    }

    //This function displays the current player stats to the right location
    displayStats() {
        document.getElementById('healthStatDisplay').innerText = player.health
        document.getElementById('attackStatDisplay').innerText = player.attack
        document.getElementById('thirstStatDisplay').innerText = player.thirst
        document.getElementById('hungerStatDisplay').innerText = player.hunger
        document.getElementById('weaponEquippedDisplay').innerText = player.weaponEquiped;
        document.getElementById('staminaStatDisplay').innerText = `${player.stamina} / ${player.maxStamina}`;
    }

    displayEnemyStats(){
        document.getElementById('enemyStats').innerText = `
        name: ${currentEnemy.name}
        health: ${currentEnemy.health}
        attack: ${currentEnemy.attack}
        stamina: ${currentEnemy.stamina}
        `
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

//NOT PART OF THE GAME MANAGER
//Just a neat way to initialize all DOM actions
//I felt like these belonged in the game_manager file, but not the class

//Picks the currently selected item. Not really ideal, will definitely change in the future.
function selectItem(type) {
    switch (type) {
        case "food":
            player.selectedItem = JSON.parse(foodsDisplay.value);
            break;
        case "drink":
            player.selectedItem = JSON.parse(drinksDisplay.value);
            break;
        case "weapon":
            player.selectedItem = JSON.parse(weaponsDisplay.value);
            break;
        default:
            alert("Impossible selection? How did you do this?!");
            break;
    }
}

function consumeClick(type) {
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
}

function discardClick() {
    if (player.selectedItem === 0 || player.selectedItem === null) return;
    if (confirm(`Are you sure you want to discard ${player.selectedItem.name}?`)) {
        inventory.removeItemFromInventory(player.selectedItem);
    }
}

function startCombat() {
    currentEnemy = new Enemy('skeleton', 20, 5, 50, 2, 100);
    let attackButton = document.createElement('button');
    attackButton.innerText = 'attack';
    attackButton.id = 'attackButton';
    attackButton.addEventListener('click', function () {
        player.battleAction(0);
    });
    document.getElementById('combatField').append(attackButton);
    console.log(currentEnemy.name);
    gameManager.displayEnemyStats();
    let playerCombat = setInterval(() => {
        if (player.stamina < player.maxStamina) {
            if (currentEnemy.checkEnemyDeath() === false) {
                player.regenStamina();
            }
            else {
                this.clearInterval(playerCombat);
            }
        }
    }, 4000);
    // enemy 
    let enemyCombat = setInterval(() => {
        if (currentEnemy.checkEnemyDeath() === false) {
            currentEnemy.battleAction();
        }
        else {
            console.log("Can't attack, I am dead");
            document.getElementById('enemyStats').innerText = ''
            this.clearInterval(enemyCombat);
        }
    }, 5000);
}


