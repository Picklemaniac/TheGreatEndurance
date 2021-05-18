let player1 = new Player(2, 3);
let map1 = new Map();
let inventory1 = new Inventory();

let selectedItem;

const weaponsDisplay = document.getElementById('weaponsDisplay');
const foodsDisplay = document.getElementById('foodsDisplay');
const drinksDisplay = document.getElementById('drinksDisplay');

//Picks the currently selected item. Not really ideal, will definitely change in the future.
function selectItem(type) {
    switch(type) {
        case "food":
            selectedItem = JSON.parse(foodsDisplay.value);
            break;
        case "drink":
            selectedItem = JSON.parse(foodsDisplay.value);
            break;
        case "weapon":
            selectedItem = JSON.parse(weaponsDisplay.value);
            break;
        default:
            alert("Impossible selection? How did you do this?!");
            break;
    }
}

function consume(type) {
    switch(type) {
        case "food":
            player1.consume(JSON.parse(foodsDisplay.value));
            break;
        case "drink":
            player1.consume(JSON.parse(drinksDisplay.value));
            break;
        default:
            alert("Nothing selected");
            break;
    }
    player1.displayStats();
}

function discard() {
    if (selectedItem === 0 || selectedItem === undefined) return;

    if (confirm(`Are you sure you want to discard ${selectedItem.name}?`)) {
        inventory1.removeItemFromInventory(selectedItem);
    }
}

document.getElementById("north").addEventListener("click", function () {player1.moveOnMap(-1, 0);});
document.getElementById("east").addEventListener("click", function () {player1.moveOnMap(0, 1);});
document.getElementById("south").addEventListener("click", function () {player1.moveOnMap(1, 0);});
document.getElementById("west").addEventListener("click", function () {player1.moveOnMap(0, -1);});

player1.displayStats();
player1.displayControls();