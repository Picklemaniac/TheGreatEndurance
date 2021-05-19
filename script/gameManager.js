//This class is going to keep track of the game, dom events, and things will be initialized here

let gameManager;

const weaponsDisplay = document.getElementById('weaponsDisplay');
const foodsDisplay = document.getElementById('foodsDisplay');
const drinksDisplay = document.getElementById('drinksDisplay');

const eatActionBtn = document.getElementById('eatActionBtn');
const drinkActionBtn = document.getElementById('drinkActionBtn');
const equipActionBtn = document.getElementById('equipActionBtn');
const discardActionBtn = document.getElementById('discardActionBtn');


class GameManager {
    //Starts the game
    gameStart() {
        player = new Player();
        inventory = new Inventory();
        map =new Map();

        this.initializeButtons();
        player.displayStats();
        player.displayControls();
    }

    //Initialize all the necessary buttons
    initializeButtons() {
        //Movement Controls
        document.getElementById("north").addEventListener("click", function () {player.moveOnMap(-1, 0);});
        document.getElementById("east").addEventListener("click", function () {player.moveOnMap(0, 1);});
        document.getElementById("south").addEventListener("click", function () {player.moveOnMap(1, 0);});
        document.getElementById("west").addEventListener("click", function () {player.moveOnMap(0, -1);});

        //Management Controlls
        drinksDisplay.addEventListener("change", function () {selectItem("drink")});
        foodsDisplay.addEventListener("change", function () {selectItem("food")});
        weaponsDisplay.addEventListener("change", function () {selectItem("weapon")});

        eatActionBtn.addEventListener("click", function () {consumeClick("food")});
        drinkActionBtn.addEventListener("click", function () {consumeClick("drink")});
        equipActionBtn.addEventListener("click", function () {alert("Nothing here yet whoops")});
        discardActionBtn.addEventListener("click", function () {discardClick()});

    }
}

//NOT PART OF THE GAME MANAGER
//Just a neat way to also initialize all clickable functions

//Picks the currently selected item. Not really ideal, will definitely change in the future.
function selectItem(type) {
    switch(type) {
        case "food":
            player.selectedItem = JSON.parse(foodsDisplay.value);
            break;
        case "drink":
            player.selectedItem = JSON.parse(foodsDisplay.value);
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
    switch(type) {
        case "food":
            if (foodsDisplay.value !== 0) player.consume(JSON.parse(foodsDisplay.value));
            break;
        case "drink":
            if (drinksDisplay.value !== 0) player.consume(JSON.parse(drinksDisplay.value));
            break;
        default:
            break;
    }
    player.displayStats();
}

function discardClick() {
    if (player.selectedItem === 0 || player.selectedItem === null) return;
    if (confirm(`Are you sure you want to discard ${player.selectedItem.name}?`)) {
        inventory.removeItemFromInventory(player.selectedItem);
    }
}
